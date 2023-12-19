"use client";

import { useState } from "react";
import ContactForm from "./components/contact-form";

import { AiFillCheckCircle } from "react-icons/ai";

type SuccessProps = {
  first: string;
  id: string;
};

type FormData = {
  first: string;
  id: string;
};

const Success: React.FC<SuccessProps> = ({ first, id }) => (
  <section className="max-w-3xl mx-auto">
    <div className="text-center border-2 border-black border-green py-16">
      <h4 className="text-2xl font-medium flex flex-row items-center justify-center">
        Submission success! Thank you {first}.{" "}
        <AiFillCheckCircle className="text-green-600" />
      </h4>
      <h4>Here is your id for this message {id}</h4>
      <p>
        We will get back to you soon. We sent a copy of the id to your email
      </p>
    </div>
  </section>
);

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({ first: "", id: "" });

  const handleFormSubmission = (data: FormData) => {
    setIsSubmitted(true);
    setSubmittedData({ first: data.first, id: data.id });
  };
  return (
    <section className="py-20">
      {/* <div>google maps here</div> */}
      <div className="flex-col flex max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-5xl font-medium mx- mb-6">
            Let us know your thoughts
          </h2>
          <p className="text-lg font-thin tracking-wide px-6 mb-16 text-center">
            Please email us with your questions and comments, or use the form
            provided. Visit our community page to learn how to request
            charitable contributions, swiss made replicas watches fundraising
            assistance, and sponsorships.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-lg px-6 mb-16">
          <div className="mb-8">
            <h4 className="font-light">General Information/Comments:</h4>
            <a
              href="mailto:support@gualbertos2.com"
              className="font-semibold hover:underline cursor-pointer tracking-wide"
            >
              contact@gualbertos2.com
            </a>
          </div>
          <div className="hidden md:block md:border border-black h-24"></div>
          <div className="mb-8">
            <p className="flex flex-col tracking-wide font-light text-lg cursor-pointer px-6 line-clamp-2 hover:underline">
              <span className="tracking-wide  font-light">
                5447 Kearny Villa Rd
              </span>{" "}
              <span className="tracking-wide font-light">
                San Diego, CA 92123
              </span>
            </p>
          </div>
          <div className="hidden md:block md:border border-black h-24"></div>
          <div className="mb-8">
            <h4 className="font-light">Catering and Events:</h4>
            <p className="font-semibold hover:underline cursor-pointer tracking-wide">
              events@gualbertos2.com
            </p>
          </div>
        </div>

        <div>
          {isSubmitted ? (
            <Success first={submittedData.first} id={submittedData.id} />
          ) : (
            <ContactForm onSuccessfulSubmit={handleFormSubmission} />
          )}
        </div>

        <div className="md:grid sm:grid-cols-8  py-16">
          <div className="border border-green-800 flex flex-col text-center justify-between sm:gap-6 col-start-2 col-end-8 py-8">
            <div>
              <h4 className="text-3xl font-light">
                Interested in being part of the Gualbertos team?
              </h4>
            </div>
            <div>
              <p className="text-green-800 cursor-pointer hover:underline font-medium text-lg tracking-wider">
                Submit an application here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
