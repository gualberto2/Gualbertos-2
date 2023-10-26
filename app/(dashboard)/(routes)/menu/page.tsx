import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import {
  comboPlates,
  breakfast,
  breakfastBurritos,
  enchiladas,
  tostadas,
  gualbertosSpecialty,
  burritos,
  soups,
  seafood,
  chimichangas,
  carneasadaFries,
  surfAndTurfFries,
  tortas,
  chips,
  sides,
  quesadillas,
  superQuesadillas,
  tacos,
  extra,
  hamburgers,
  salads,
  partyPacks,
  drinks,
  kidsMenu,
} from "./components/menu-items";

import { MdRestaurantMenu, MdBreakfastDining } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { LuSoup, LuSandwich, LuSalad, LuPartyPopper } from "react-icons/lu";
import { IoFishSharp } from "react-icons/io5";
import { CiFries } from "react-icons/ci";
import { TbCheese } from "react-icons/tb";
import { GiTacos } from "react-icons/gi";
import { PiForkKnifeBold } from "react-icons/pi";
import { FaHamburger } from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Menu = () => {
  return (
    <section className="max-w-5xl mx-auto py-8">
      <div className="shadow-xl bg-white">
        <div>
          <h2 className="text-center uppercase font-bold text-3xl pt-8">
            Explore our menu
          </h2>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-9nB3FuMgiLN66xC3dnacRRJtWSQvAgNA&usqp=CAU"
            alt="Wet Burrito with side of beans and rice topped with cheese"
            className="w-full h-full px-8 py-8"
          />
          <p className=" pb-4 font-extralight text-lg px-6">
            We are passionate about serving delicious, authentic Mexican food to
            generations of guests. The recipes have been crafted through señor
            Joaquin’s decades of culinary experience, with a touch of innovation
            from his children. Everything is made fresh daily from scratch, with
            the highest quality, locally sourced ingredients, best quality
            replica watches with the love and care you would expect when your
            family is making a meal.
          </p>
          <div className="mx-auto flex flex-row justify-center gap-2 mb-16">
            <Button className="bg-green-800 hover:bg-green-600">
              Order Online
            </Button>
            <Button
              variant="outline"
              className="border-green-800 text-green-800 hover:bg-green-100"
            >
              Catering
            </Button>
          </div>
        </div>
        <Separator />
        <Accordion type="single" collapsible>
          <AccordionItem value="combo-plates" className="">
            <AccordionTrigger className="text-lg font-bold px-4 ">
              <p className="flex flex-row items-center gap-3">
                <MdRestaurantMenu className="text-2xl" /> Combination Plate
              </p>
            </AccordionTrigger>

            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3">
                  served with rice and beans
                </h4>
                {comboPlates.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <MdBreakfastDining className="text-2xl" />
                Breakfast
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3">
                  served with rice and beans
                </h4>
                {breakfast.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-0.5 -0.5 14 14"
                  height="25"
                  width="25"
                >
                  <g id="burrito-fastfood">
                    <path
                      id="rectangle 69"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M0.8028391428571429 9.654635714285714 3.21815 12.069942857142857c0.362635 0.3626071428571429 0.9505692857142858 0.3626071428571429 1.3132042857142858 0l4.9154671428571435 -4.915513571428572 -3.7284928571428573 -3.7285114285714287L0.8028400714285714 8.341412857142858C0.4402097142857143 8.704038571428573 0.4402097142857143 9.291935714285716 0.8028391428571429 9.654635714285714Z"
                      stroke-width="1"
                    ></path>
                    <path
                      id="rectangle 67"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M0.5572097142857143 8.87934357142857 5.551102142857143 10.187264285714287c0.6872542857142857 0.17995714285714287 1.3138264285714285 -0.4470142857142857 1.1333864285714286 -1.1341292857142857L5.313898571428572 3.8339878571428576"
                      stroke-width="1"
                    ></path>
                    <path
                      id="ellipse 1463"
                      stroke="#000"
                      stroke-linecap="round"
                      d="M6.173551428571429 3.8811407142857144c0.11293285714285715 -0.17742214285714286 0.33460142857142855 -0.4655021428571429 0.5079750000000001 -0.60424 0.317655 -0.2541778571428571 0.6900864285714285 -0.39363071428571433 1.0672257142857142 -0.42391142857142855 0.6275378571428571 -0.05038428571428572 1.2681128571428573 0.20151857142857144 1.691105 0.7300800000000001 0.6771142857142857 0.846235 0.5400571428571429 2.0811607142857143 -0.306215 2.7582935714285717l-0.27594357142857145 0.22030357142857143"
                      stroke-width="1"
                    ></path>
                    <path
                      id="union"
                      stroke="#000"
                      stroke-linejoin="round"
                      d="M5.997921428571429 3.717322142857143c-0.64727 -0.64727 -0.6467314285714286 -1.6961564285714286 0 -2.342897142857143 0.52312 -0.5231181428571429 1.310985 -0.6255145 1.9349107142857145 -0.30293714285714285l0.05146142857142857 -0.053587857142857145c0.33689500000000006 -0.33689871428571433 0.7825535714285714 -0.498186 1.2234392857142857 -0.48492228571428575 0.40697428571428573 0.013263714285714287 0.8096028571428572 0.1750812142857143 1.119467142857143 0.48492228571428575 0.2928714285714286 0.29286214285714285 0.4536071428571429 0.6690171428571429 0.4817428571428572 1.0526007142857143 0.37987857142857145 0.029714285714285717 0.7554857142857143 0.18463714285714286 1.0462214285714286 0.4753728571428571 0.647307142857143 0.64727 0.64675 1.6961657142857143 0 2.342897142857143 -0.01912857142857143 0.019100714285714287 -0.037142857142857144 0.03501642857142857 -0.055714285714285716 0.053587857142857145 0.3225857142857143 0.6239257142857143 0.2223 1.4096642857142858 -0.3008571428571429 1.9327842857142856 -0.6466571428571429 0.6467314285714286 -1.6955714285714287 0.64727 -2.3428507142857145 0"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
                Breakfast Burritos
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3">
                  served with rice and beans
                </h4>
                {breakfastBurritos.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <PiForkKnifeBold className="text-2xl" />
                Enchiladas
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {enchiladas.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <PiForkKnifeBold className="text-2xl" />
                Tostadas
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {tostadas.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <BsFillStarFill className="text-2xl" /> Gualbertos Specialty
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {gualbertosSpecialty.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-0.5 -0.5 14 14"
                  height="25"
                  width="25"
                >
                  <g id="burrito-fastfood">
                    <path
                      id="rectangle 69"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M0.8028391428571429 9.654635714285714 3.21815 12.069942857142857c0.362635 0.3626071428571429 0.9505692857142858 0.3626071428571429 1.3132042857142858 0l4.9154671428571435 -4.915513571428572 -3.7284928571428573 -3.7285114285714287L0.8028400714285714 8.341412857142858C0.4402097142857143 8.704038571428573 0.4402097142857143 9.291935714285716 0.8028391428571429 9.654635714285714Z"
                      stroke-width="1"
                    ></path>
                    <path
                      id="rectangle 67"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M0.5572097142857143 8.87934357142857 5.551102142857143 10.187264285714287c0.6872542857142857 0.17995714285714287 1.3138264285714285 -0.4470142857142857 1.1333864285714286 -1.1341292857142857L5.313898571428572 3.8339878571428576"
                      stroke-width="1"
                    ></path>
                    <path
                      id="ellipse 1463"
                      stroke="#000"
                      stroke-linecap="round"
                      d="M6.173551428571429 3.8811407142857144c0.11293285714285715 -0.17742214285714286 0.33460142857142855 -0.4655021428571429 0.5079750000000001 -0.60424 0.317655 -0.2541778571428571 0.6900864285714285 -0.39363071428571433 1.0672257142857142 -0.42391142857142855 0.6275378571428571 -0.05038428571428572 1.2681128571428573 0.20151857142857144 1.691105 0.7300800000000001 0.6771142857142857 0.846235 0.5400571428571429 2.0811607142857143 -0.306215 2.7582935714285717l-0.27594357142857145 0.22030357142857143"
                      stroke-width="1"
                    ></path>
                    <path
                      id="union"
                      stroke="#000"
                      stroke-linejoin="round"
                      d="M5.997921428571429 3.717322142857143c-0.64727 -0.64727 -0.6467314285714286 -1.6961564285714286 0 -2.342897142857143 0.52312 -0.5231181428571429 1.310985 -0.6255145 1.9349107142857145 -0.30293714285714285l0.05146142857142857 -0.053587857142857145c0.33689500000000006 -0.33689871428571433 0.7825535714285714 -0.498186 1.2234392857142857 -0.48492228571428575 0.40697428571428573 0.013263714285714287 0.8096028571428572 0.1750812142857143 1.119467142857143 0.48492228571428575 0.2928714285714286 0.29286214285714285 0.4536071428571429 0.6690171428571429 0.4817428571428572 1.0526007142857143 0.37987857142857145 0.029714285714285717 0.7554857142857143 0.18463714285714286 1.0462214285714286 0.4753728571428571 0.647307142857143 0.64727 0.64675 1.6961657142857143 0 2.342897142857143 -0.01912857142857143 0.019100714285714287 -0.037142857142857144 0.03501642857142857 -0.055714285714285716 0.053587857142857145 0.3225857142857143 0.6239257142857143 0.2223 1.4096642857142858 -0.3008571428571429 1.9327842857142856 -0.6466571428571429 0.6467314285714286 -1.6955714285714287 0.64727 -2.3428507142857145 0"
                      stroke-width="1"
                    ></path>
                  </g>
                </svg>
                Burritos
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {burritos.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <LuSoup className="text-2xl" /> Soups
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {soups.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <IoFishSharp className="text-2xl" /> Seafood
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {seafood.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <CiFries className="text-2xl" /> Carneasada Fries
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {carneasadaFries.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <CiFries className="text-2xl" /> Surf & Turf Fries
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {surfAndTurfFries.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <LuSandwich className="text-2xl" /> Tortas
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {tortas.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <LuSandwich className="text-2xl" /> Chips
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {chips.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <TbCheese className="text-2xl" /> Quesadillas
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {quesadillas.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <TbCheese className="text-2xl" />
                Super Quesadillas{" "}
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {superQuesadillas.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <GiTacos className="text-2xl" />
                Tacos
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {tacos.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <PiForkKnifeBold className="text-2xl" />
                Extras
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {extra.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <PiForkKnifeBold className="text-2xl" />
                Chimichanga
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {chimichangas.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <FaHamburger className="text-2xl" />
                Hamburgers
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {hamburgers.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <LuSalad className="text-2xl" />
                Salads
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {salads.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <LuPartyPopper className="text-2xl" />
                Party Packs
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {partyPacks.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <MdLocalDrink className="text-2xl" />
                Drinks
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {drinks.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="text-lg font-bold px-4">
              <p className="flex flex-row items-center gap-3">
                <TbMoodKid className="text-2xl" />
                Kids Menu
              </p>
            </AccordionTrigger>
            <AccordionContent className="px-12">
              <div className="">
                <h4 className="font-semibold text-gray-500/50 text-center uppercase mb-3"></h4>
                {kidsMenu.map((item) => (
                  <div className="flex flex-col" key={item.id}>
                    <Separator />
                    <div className="flex-flex-col hover:bg-gray-100 transition duration-150 ease-in-out">
                      <div className="flex flex-row justify-between items-center my-4 px-4">
                        <p className="font-light">{item.title}</p>
                        <p className="font-light mr-3">{item.price}</p>
                      </div>
                    </div>
                    <Separator />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
export default Menu;
