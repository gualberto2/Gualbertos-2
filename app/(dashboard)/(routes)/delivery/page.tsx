import { Button } from "@/components/ui/button";
import { BsCarFrontFill } from "react-icons/bs";
import { SiGrubhub, SiPostmates, SiUbereats } from "react-icons/si";

const Delivery = () => {
  return (
    <section className="py-20">
      <div className=" max-w-5xl mx-auto">
        <div className="max-w mx-auto">
          <h2 className="text-center text-4xl mb-3">Delivery</h2>
          <p className="text-lg font-light text-center px-6">
            We are passionate about serving delicious, authentic Mexican food to
            generations of guests. The recipes have been crafted through señor
            Joaquin’s decades of culinary experience, with a touch of innovation
            from his children. Everything is made fresh daily from scratch, with
            the highest quality, locally sourced ingredients, best quality
            replica watches with the love and care you would expect when your
            family is making a meal.
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-6 grid-rows-3 px-8 py-20">
          <div className="col-start-1 col-end-5 row-span-3 mx-4 flex flex-col justify-between sm:justify-normal">
            <div className="flex flex-col sm:flex-row items-center mb-6 ">
              <SiGrubhub className="text-[7rem]" />
              <div>
                <p className="text-xl ml-3 text-gray-600 hover:underline hover:text-green-800 cursor-pointer">
                  Order now
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mb-6 ">
              <SiUbereats className="text-[7rem]" />
              <div>
                <p className="text-xl ml-3 text-gray-600 hover:underline hover:text-green-800 cursor-pointer">
                  Order now
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mb-6 ">
              <SiPostmates className="text-[7rem]" />
              <div>
                <p className="text-xl ml-3 text-gray-600 hover:underline hover:text-green-800 cursor-pointer">
                  Order now
                </p>
              </div>
            </div>
          </div>
          <div className="bg-amber-900 text-white text-center col-start-5 col-end-7 row-span-2 py-16 rounded-xs m-4 shadow-md">
            <h3 className="text-3xl font-semibol mb-4">Don't forget!</h3>
            <h4 className="text-2xl flex flex-row items-center justify-center gap-2 font-semibold mb-3">
              <BsCarFrontFill className="text-center " />
              For delivery:
            </h4>
            <p className="text-xl font-extralight px-2">
              Menu pricing and delivery fees may vary.
            </p>
          </div>
          <div className="col-start-5 col-end-7  row-start-3 mx-4">
            <Button className="w-full bg-amber-900">Order pickup</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Delivery;
