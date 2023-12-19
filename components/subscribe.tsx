"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuidv4 } from "uuid";

import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";

import { TbMailbox } from "react-icons/tb";
import { Button } from "./ui/button";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { fDb } from "@/firebase";
import { toast } from "./ui/use-toast";
import { Input } from "./ui/input";

export type FormData = {
  email: string;
};

type SubscribeFormProps = {
  onSuccessfulSubmit: (data: FormData) => void;
};

const formSchema = z.object({
  email: z.string(),
});

const Subscribe: React.FC<SubscribeFormProps> = ({ onSuccessfulSubmit }) => {
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    email: "",
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

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
      toast({
        title: "Thank you for your subscription",
        description: "You have now been subscribed to our newsletter :)",
      });
      onSuccessfulSubmit(data);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Could not submit:",
        description: "There was an issue with your subscription entry",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-green-800 py-8 ">
      <div className="max-w-xl mx-auto py-16 flex flex-col items-center px-8">
        <p className="text-center text-6xl mb-8">
          <TbMailbox className=" text-white" />
        </p>
        <h2 className="text-white uppercase text-3xl tracking-wide font-semibold text-center mb-12">
          Sign up free for future offers and deals!
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="md:col-start-1 md:col-end-5 flex flex-col md:flex-row items-center">
                  <Input
                    type="email"
                    className="pr-20 pl-4 py-2 bg-transparent border text-white placeholder-white rounded w-full  border-l-lg focus:outline-none md:rounded-r-none md:focus:ring-0"
                    placeholder="Type email here"
                    {...field}
                  />

                  <Button className="rounded uppercase bg-white border border-white hover:bg-transparent text-black hover:text-white w-full mt-4 md:mt-0 md:w-28 whitespace-nowrap py-5 md:rounded-r-lg md:rounded-l-none">
                    Subscribe
                  </Button>
                </div>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Subscribe;
