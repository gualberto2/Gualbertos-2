"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { addDoc, collection } from "firebase/firestore";
import { fDb } from "@/firebase";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";

import ReCAPTCHA from "react-google-recaptcha";
import { Checkbox } from "@/components/ui/checkbox";

type FormData = {
  first: string;
  id: string;
};

type ContactFormProps = {
  onSuccessfulSubmit: (data: FormData) => void;
};

const formSchema = z.object({
  first: z.string(),
  last: z.string(),
  email: z.string(),
  phone: z.string(),
  message: z.string(),
  id: z.string(),
  terms: z.boolean(),
});

const ContactForm: React.FC<ContactFormProps> = ({ onSuccessfulSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [captcha, setCaptcha] = useState(false);

  const defaultValues = {
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
    id: "",
    terms: false,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    const newId = ` ${uuidv4()}`;
    setId(newId);
    form.setValue("id", newId);
  }, [form]);

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      const docRef = await addDoc(collection(fDb, "contact_message"), {
        ...data,
      });

      const res = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });

      form.reset();
      toast.success("Thank you for submitting.");
      onSuccessfulSubmit(data);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="px-5 md:px-0">
          <div className=" md:grid sm:grid-cols-8 grid-rows-3">
            <div className="flex flex-col sm:flex-row justify-between sm:gap-6 col-start-2 col-end-8 ">
              <FormField
                control={form.control}
                name="first"
                render={({ field }) => (
                  <div className="w-full">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      required
                      type="text"
                      className="pr-20 pl-4 py-2 bg-gray-200  text-gray-500 placeholder-gray-500 rounded w-full focus:outline-none md:rounded-r-none md:focus:ring-0"
                      placeholder="Type first name here"
                      {...field}
                    />
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="last"
                render={({ field }) => (
                  <div className="w-full">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      required
                      type="text"
                      className="pr-20 pl-4 py-2 bg-gray-200 text-gray-500 placeholder-gray-500 rounded w-full focus:outline-none md:rounded-r-none md:focus:ring-0"
                      placeholder="Type last name here"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
            <div className="col-start-2 col-end-8 row-start-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div>
                    <Label htmlFor="phone" className="whitespace-nowrap">
                      Email
                    </Label>
                    <Input
                      required
                      type="email"
                      className="pr-20 pl-4 py-2 bg-gray-200 text-gray-500 placeholder-gray-500 rounded w-full focus:outline-none md:rounded-r-none md:focus:ring-0"
                      placeholder="Type email here"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
            <div className="col-start-2 col-end-8 row-start-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <div>
                    <Label htmlFor="phone" className="whitespace-nowrap">
                      Phone Number
                    </Label>
                    <Input
                      required
                      type="text"
                      className="pr-20 pl-4 py-2 bg-gray-200 text-gray-500 placeholder-gray-500 rounded w-full focus:outline-none md:rounded-r-none md:focus:ring-0"
                      placeholder="(123)-456-7890"
                      max={18}
                      // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      {...field}
                    />
                  </div>
                )}
              />
            </div>
          </div>
          <div className="md:grid sm:grid-cols-8 auto-rows-min ">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <div className="col-start-2 col-end-8">
                  <Label htmlFor="lastName">Message/Comment</Label>
                  <Textarea
                    minLength={5}
                    maxLength={1000}
                    required
                    className="pr-20 pl-4 py-2 bg-gray-200 h-[250px] text-gray-500 placeholder-gray-500 rounded w-full focus:outline-none md:rounded-r-none md:focus:ring-0"
                    placeholder="Type message or comment here"
                    {...field}
                  />
                </div>
              )}
            />
          </div>

          <div className="md:grid sm:grid-cols-8 auto-rows-min">
            <div className="col-start-2 col-end-8 flex flex-col justify-between mx-auto ">
              <div className="justify-center mt-5  flex items-center ">
                <Checkbox id="terms" className="mr-1" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              </div>
              <ReCAPTCHA
                className=" mx-auto mt-4"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(value) => setCaptcha(!!value)}
              />
            </div>

            <Button
              className="row-start-2 mt-4 col-start-2 col-end-8 bg-green-900 tracking-wider rounded-xs uppercase font-light w-full mx-auto "
              type="submit"
              // disabled={!captcha}
            >
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default ContactForm;
