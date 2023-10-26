import ContactForm from "@/app/(dashboard)/(routes)/contact/components/contact-form";
import formData from "form-data";
import Mailgun from "mailgun.js";
import type { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import moment from "moment";
import toast from "react-hot-toast";

export async function POST(req: Response, res: NextApiResponse) {
  try {
    const body = await req.json();
    console.log(body);

    const { first, last, phone, message, email, id, terms } = body;

    const API_KEY = process.env.MAILGUN_API_KEY || "";
    const DOMAIN = process.env.MAILGUN_DOMAIN || "";

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: "api", key: API_KEY });

    const date = moment().format("MMMM Do YYYY, h:mm:ss a");

    const messageData = {
      from: `support@gualbertos2.com`,
      to: `support@gualbertos2.com`,
      subject: `Support ticket for ${first}, ID:${id}`,
      text: `${first} ${last}, ID: ${id}, email: ${email}
      
      This was submitted: ${date}

      Message reads as follows:
      ${message}

      Thank you.
      `,
    };

    try {
      const emailRes = await client.messages.create(DOMAIN, messageData);
      console.log(emailRes);
    } catch (error) {
      console.log("Error sending email", error);
    }

    const confirmationMessageData = {
      from: `support@gualbertos2.com`,
      to: email,
      subject: `Confirmation of your support ticket submission`,
      text: `Hello ${first} ${last},

      Here is your support ticket ID:${id}
    
      Thank you for submitting your support ticket on ${date}. Here's a copy of your message for your reference:
    
      ${message}
    
      We'll get back to you as soon as possible!
    
      Best regards,
      Support Team`,
    };

    try {
      const confirmationEmailRes = await client.messages.create(
        DOMAIN,
        confirmationMessageData
      );
      console.log(confirmationEmailRes);
    } catch (error) {
      toast.error("Could not send email");
    }

    if (!first || !last || !phone || !email || !message || !id || !terms) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    return NextResponse.json(ContactForm);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
