/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import Subscribe from "@/components/subscribe";
import Carousel from "@/components/carousel";

import Link from "next/link";

import { FormData } from "@/components/subscribe";

const locations = [
  <div
    className="g-3 h-[700px] w-full  flex flex-col justify-end text-center text-white pb-8 "
    key="gbertos-3"
  >
    <h2 className="text-3xl font-bold">Gualberto's 3</h2>
    <p className="flex flex-col tracking-wide font-light text-lg cursor-pointer px-6 hover:text-gray-300 transition duration-200 ease-in-out">
      <span className="tracking-wide font-light text-lg underline px-6">
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=6215+Imperial+Ave,+San+Diego,+CA+92114"
          target="_blank"
          className="underline"
          rel="noopener noreferrer"
        >
          6215 Imperial Ave
        </Link>
      </span>
      <span className="tracking-wide font-light underline text-lg px-6 ">
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=6215+Imperial+Ave,+San+Diego,+CA+92114"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          San Diego, CA 92114
        </Link>
      </span>
    </p>
  </div>,
  <div
    className="g-1 h-[700px] w-full flex flex-col justify-end text-center text-white pb-8"
    key="gbertos-2"
  >
    <h2 className="text-3xl font-bold">Gualberto's 1</h2>
    <p className="flex flex-col tracking-wide font-light text-lg cursor-pointer px-6 hover:text-gray-300 transition duration-200 ease-in-out">
      <span className="tracking-wide font-light text-lg  px-6 underline">
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=5871+University+Ave+#333,+San+Diego,+CA+92115"
          target="_blank"
          rel="noopener noreferrer"
        >
          5871 University Ave #333
        </Link>
      </span>{" "}
      <span className="tracking-wide font-light text-lg underline" px-6>
        <Link
          href="https://www.google.com/maps/dir/?api=1&destination=5871+University+Ave+#333,+San+Diego,+CA+92115"
          target="_blank"
          rel="noopener noreferrer"
        >
          San Diego, CA 92115
        </Link>
      </span>
    </p>
  </div>,
];

const Home = () => {
  const handleSuccessfulSubmit = (data: FormData) => {
    console.log("Form submitted successfully with data:", data);
    // You can implement any logic you want here after successful form submission
  };
  return (
    <section className="">
      <div className=" mx-auto text-center py-12 h-[600px] object-fit main-bg flex flex-col justify-center text-white items-center">
        <h2 className="text-4xl font-semibold uppercase mb-4">Order now</h2>
        <p className="text-lg font-light mb-3">
          Click to order online or call-in your order
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="text-xl px-8 py-8 bg-green-800 border border-green-800 hover:bg-green-800/50">
            <Link
              href="https://food.google.com/chooseprovider?restaurantId=/g/1tfm6z14&g2lbs=ANTchaMpSH41hd2FOcGGPQWAT02MnF0CoeDtVHNHA0cDEELgkkopsL9-83bq6Tsmtht8HXCbqkJ-ZAl2UKZqPkjdJbfuYyMn6du2vwVVBy8nMal3OxQK16hTFH14fRHCnYwj0fkpYPRD5LzlzG77G5kxH1iFgsnCHA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=qHx4ZbXKBIH4kPIPqrCVmAI&ei=qHx4ZbXKBIH4kPIPqrCVmAI&fo_s=OA&opi=89978449&sei=CVEf821a8GuyEa1C5IlnHWcx&utm_campaign&utm_source=search"
              rel="noopener noreferrer"
              target="_blank"
            >
              Order Online
            </Link>
          </Button>
          <Button
            variant="secondary"
            className="text-xl px-8 py-8 border-white hover:bg-white/40"
          >
            <Link href="tel:+18582683209" className="">
              Call-in
            </Link>
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-5xl py-8 space-y-8 px-4 sm:px-0 mb-28">
        <div className="mt-16 mb-8">
          <h2 className="font-semibold text-4xl mb-8 text-center">Visit us</h2>
          <p className="font-light text-md underline cursor-pointer mb-4 hover:text-gray-500 transition duration-150 ease-in-out text-center">
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=5447+Kearny+Villa+Rd,+San+Diego,+CA+92123"
              target="_blank"
              rel="noopener noreferrer"
            >
              5447 Kearny Villa Rd, San Diego, CA 92123
            </Link>
          </p>
          <div className="text-sm font-light mt-2 flex flex-col justify-center items-center">
            <p className="tracking-wider">OPEN DAILY</p>
            <div className="flex flex-col tracking-wide">
              <p>M-F | 6am-8pm</p>
              <p>SAT | 6am-7pm</p>
              <p>SUN | 6am-6pm</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 lg:flex-row gap-8 pt-8">
          <div className="lg:flex-1 p-4 h-[400px] flex flex-col justify-end home-cardOne">
            <div className="flex flex-col px-8 text-white">
              <h2 className="text-2xl uppercase font-semibold lg:whitespace-nowrap text-center mb-2">
                Family Run
              </h2>
              <p className="text-center tracking-wide text-sm h-24">
                We like to keep it in the family. We are proudly family owned
                and operated since 1993.
              </p>
            </div>
          </div>
          <div className="lg:flex-1  p-4 h-[400px] flex flex-col justify-end home-cardTwo">
            <div className="flex flex-col px-8 text-white">
              <h2 className="text-2xl uppercase font-semibold lg:whitespace-nowrap text-center mb-2">
                Order Online
              </h2>
              <p className="text-center tracking-wide text-sm h-24">
                Skip the line and order through one of the online ordering
                services.
              </p>
            </div>
          </div>
          <div className="lg:flex-1  p-4 h-[400px] flex flex-col justify-end home-cardThree">
            <div className="flex flex-col px-8 text-white">
              <h2 className="text-2xl uppercase font-semibold lg:whitespace-nowrap text-center mb-2">
                Truly fresh
              </h2>
              <p className="text-center tracking-wide text-sm h-24">
                We make all food from scratch everyday. Locally sourcing our
                produce to provide fresh food daily.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Subscribe onSuccessfulSubmit={handleSuccessfulSubmit} />
      </div>
      <div className="mx-auto max-w-6xl py-20">
        <h3 className="text-center mb-16 font-semibold text-3xl">
          Visit one of our sibling locations!
        </h3>
        <div className="mx-auto flex justify-center px-8">
          <Carousel items={locations} />
        </div>
      </div>
    </section>
  );
};
export default Home;
