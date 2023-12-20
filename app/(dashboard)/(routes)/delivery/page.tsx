"use client";

import { Button } from "@/components/ui/button";
import { SiGrubhub, SiPostmates, SiUbereats } from "react-icons/si";
import { useToast } from "@/components/ui/use-toast";
import React, { useEffect } from "react";
import Link from "next/link";

const Delivery = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "For Delivery:",
      description: "Menu pricing and delivery fees may vary.",
      className: "bg-amber-900 text-white",
    });
  }, [toast]);

  return (
    <section className="py-20">
      <div className=" max-w-5xl mx-auto">
        <div className="max-w mx-auto">
          <h2 className="text-center text-4xl mb-3">Delivery</h2>
          <p className="text-lg font-light text-center px-6">
            We are passionate about serving delicious, authentic Mexican food to
            generations of guests. The recipes have been crafted through señor
            Joaquins decades of culinary experience, with a touch of innovation
            from his children. Everything is made fresh daily from scratch, with
            the highest quality, locally sourced ingredients, best quality
            replica watches with the love and care you would expect when your
            family is making a meal.
          </p>
        </div>
        <div className="flex flex-col  gap-12 px-8 py-20">
          <div className=" mx-4 flex flex-col sm:flex-row justify-around">
            <div className="flex flex-col items-center align-center mb-6 ">
              <Link
                href="https://www.grubhub.com/restaurant/gualbertos-taco-shop-2-5447-kearny-villa-rd-san-diego/2215802"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiGrubhub className="text-[7rem]" />
                <div className="w-full">
                  <Button className="w-full bg-amber-900 hover:underline px-4 cursor-pointer">
                    Order
                  </Button>
                </div>
              </Link>
            </div>
            <div className="flex flex-col  items-center mb-6 ">
              <Link
                href="https://www.ubereats.com/store/gualbertos-taco-shop-%232/-6cPlv7ZSGGbqp256Kj16g"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiUbereats className="text-[7rem]" />
                <div className="w-full">
                  <Button className="w-full bg-amber-900 hover:underline px-4 cursor-pointer">
                    Order
                  </Button>
                </div>
              </Link>
            </div>
            <div className="flex flex-col items-center mb-6 ">
              <Link
                href="https://postmates.com/store/gualbertos-taco-shop-%232/-6cPlv7ZSGGbqp256Kj16g"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiPostmates className="text-[7rem]" />
                <div className="w-full">
                  <Button className="w-full bg-amber-900 hover:underline px-4 cursor-pointer">
                    Order{" "}
                  </Button>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-start-5 col-end-7  row-start-3 mx-4"></div>
        </div>
      </div>
    </section>
  );
};
export default Delivery;
