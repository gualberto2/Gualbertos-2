import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import { MdRestaurantMenu, MdBreakfastDining } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { LuSoup, LuSandwich, LuSalad, LuPartyPopper } from "react-icons/lu";
import { IoFishSharp } from "react-icons/io5";
import { CiFries } from "react-icons/ci";
import { TbCheese } from "react-icons/tb";
import { GiTacos } from "react-icons/gi";
import { PiForkKnifeBold } from "react-icons/Pi";
import { FaHamburger } from "react-icons/fa";
import { MdLocalDrink } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const comboPlates = [
  { id: "combo-1", title: "#1. Two Beef or Chicken Tacos", price: "" },
  { id: "combo-2", title: "#2. Two Enchiladas", price: "" },
  { id: "combo-3", title: "#3. Beef Taco & Beef Burrito", price: "" },
  { id: "combo-4", title: "#4. Beef Taco & Cheese Enchilada", price: "" },
  { id: "combo-5", title: "#5. Beef Burrito & Cheese Enchilada", price: "" },
  { id: "combo-6", title: "#6. Cheese Enchilada & Beef Tostada", price: "" },
  { id: "combo-7", title: "#7. Carne Asada Plate", price: "" },
  { id: "combo-8", title: "#8. Chorizo or Machaca Plate", price: "" },
  { id: "combo-9", title: "#9. Two Beef or Chicken Burritos", price: "" },
  { id: "combo-10", title: "#10. Two Chile Relleno Plate", price: "" },
  { id: "combo-11", title: "#11. Two Carne Asada Tacos", price: "" },
  { id: "combo-12", title: "#12. Chimichanga W/ Rice and Beans", price: "" },
  { id: "combo-13", title: "#13. Carnitas Plate", price: "" },
  { id: "combo-14", title: "#14. Cheese Enchilada", price: "" },
  { id: "combo-15", title: "#15. Tamale & Beef Taco", price: "" },
  { id: "combo-16", title: "#16. Chile Verde Plate (Pork)", price: "" },
  { id: "combo-17", title: "#17. Pollo en Salsa Chipotle", price: "" },
  { id: "combo-18", title: "#18. 2 Fish Tacos Plate", price: "" },
  { id: "combo-19", title: "#19. Steak Milanesa", price: "" },
  { id: "combo-20", title: "#20. 2 Beef or Chicken Flautas", price: "" },
  { id: "combo-21", title: "#21. Steak Ranchero", price: "" },
  { id: "combo-22", title: "#22. Shrimp Enchiladas", price: "" },
  {
    id: "combo-23",
    title: "#23. Fajitas (Pollo Asado or Carne Asada)",
    price: "",
  },
  {
    id: "combo-24",
    title: "#24. Surf & Turf (Shrimp or Carne Asada)",
    price: "",
  },
  { id: "combo-25", title: "#25. Pechuga Empanizada", price: "" },
];

const breakfast = [
  {
    id: "breakfast-1",
    title: "#1. Two Eggs, Potatoes, Beans, Ham & Toast",
    price: "",
  },
  { id: "breakfast-2", title: "#2. Three Pancakes", price: "" },
  { id: "breakfast-3", title: "#3. Breakfast Plate", price: "" },
  { id: "breakfast-4", title: "#4. Ham Omelette", price: "" },
  { id: "breakfast-5", title: "#5. Chorizo W/ Eggs, Rice & Beans", price: "" },
  { id: "breakfast-6", title: "#6. Machaca W/Eggs, Rice & Beans", price: "" },
  { id: "breakfast-7", title: "#7. Ham W/Eggs, Rice & Beans", price: "" },
  {
    id: "breakfast-8",
    title: "#8. Huevos Rancheros W/ Rice & Beans",
    price: "",
  },
  { id: "breakfast-9", title: "#9. French Toast W/ Bacon & Eggs", price: "" },
  {
    id: "breakfast-10",
    title: "#10. Huevos a la Mexicana W/ Rice & Beans",
    price: "",
  },
  { id: "breakfast-11", title: "#11. Breakfast Sandwhich", price: "" },
  { id: "breakfast-12", title: "#12. Chilaquiles", price: "" },
  { id: "breakfast-13", title: "#13. Chilaquiles W/ Eggs", price: "" },
  { id: "breakfast-14", title: "#14. Shrimp Omelettes", price: "" },
  {
    id: "breakfast-15",
    title: "#15. Sausage W/ Eggs, Rice and Beans",
    price: "",
  },
  { id: "breakfast-16", title: "#16. Carneasada Omelette", price: "" },
];

const breakfastBurritos = [
  {
    id: "burrito-1",
    title: "#1. Eggs, Bacon, Cheese, Rice & Beans Burrito",
    price: "",
  },
  {
    id: "burrito-2",
    title: "#2. Eggs, Cheese, Potatoes Burrito (Choose 1: Ham, Bacon, Sausage)",
    price: "",
  },
  { id: "burrito-3", title: "#3. Eggs, Cheese, Potatoes Burrito", price: "" },
  {
    id: "burrito-4",
    title: "#4. Carneasada, Potatoes, Egg & Cheese Burrito",
    price: "",
  },
  {
    id: "burrito-5",
    title: "#5. Chorizo W/ Potatoes & Egg Burrito",
    price: "",
  },
];

const enchiladas = [
  { id: "enchilada-1", title: "Two Cheese Enchiladas", price: "" },
  { id: "enchilada-2", title: "Two Beef Enchiladas", price: "" },
  { id: "enchilada-3", title: "2 Chicken Enchiladas", price: "" },
  { id: "enchilada-4", title: "Shrimp Enchiladas", price: "" },
  { id: "enchilada-5", title: "Carne Asada Enchiladas", price: "" },
];

const tostadas = [
  { id: "tostada-1", title: "#1. Flying Saucer (Chicken or Beef)", price: "" },
  {
    id: "tostada-2",
    title: "#2. Flying Saucer (Carneasada or Carnita)",
    price: "",
  },
  {
    id: "tostada-3",
    title: "#3. Supreme Tostada (Chicken or beef)",
    price: "",
  },
  { id: "tostada-4", title: "#4. Supreme Tostada (Carneasada)", price: "" },
  { id: "tostada-5", title: "#5. Bean Tostada", price: "" },
  { id: "tostada-6", title: "#6. Beef Tostada", price: "" },
  { id: "tostada-7", title: "#7. Chicken Tostada", price: "" },
  { id: "tostada-8", title: "#8. Carneasada Tostada", price: "" },
  { id: "tostada-9", title: "#9. Carnitas Tostada", price: "" },
  { id: "tostada-10", title: "#10. Ceviche Tostada", price: "" },
];

const gualbertosSpecialty = [
  {
    id: "specialty-1",
    title: "2 Flautas",
    price: "",
  },
  {
    id: "specialty-2",
    title: "Taco Plate W/ Rice & Beans",
    price: "",
  },
  {
    id: "specialty-3",
    title: "3 Rolled tacos W/ Rice & Beans",
    price: "",
  },
  {
    id: "specialty-4",
    title: "Burrito Plate",
    price: "",
  },
  {
    id: "specialty-5",
    title: "5 Roll Tacos",
    price: "",
  },
  {
    id: "specialty-6",
    title: "12 Roll tacos",
    price: "",
  },
  {
    id: "specialty-7",
    title: "Big plate",
    price: "",
  },
];

const burritos = [
  { id: "burrito-1", title: "Pastor (Pork Adobado)", price: "" },
  { id: "burrito-2", title: "Pollo Asado (Grilled Chicken)", price: "" },
  { id: "burrito-3", title: "Fish", price: "" },
  { id: "burrito-4", title: "Bean and Cheese", price: "" },
  { id: "burrito-5", title: "Beef", price: "" },
  { id: "burrito-6", title: "Mix", price: "" },
  { id: "burrito-7", title: "Chicken", price: "" },
  { id: "burrito-8", title: "Chorizo", price: "" },
  { id: "burrito-9", title: "Machaca", price: "" },
  { id: "burrito-10", title: "Carneasada", price: "" },
  { id: "burrito-11", title: "Chile Relleno", price: "" },
  { id: "burrito-12", title: "Carnitas", price: "" },
  { id: "burrito-13", title: "Ranchero", price: "" },
  { id: "burrito-14", title: "Shrimp", price: "" },
  { id: "burrito-15", title: "California", price: "" },
  { id: "burrito-16", title: "Chile Verde", price: "" },
  { id: "burrito-17", title: "Vegetarian", price: "" },
  { id: "burrito-18", title: "Pollo Adobado", price: "" },
];

const soups = [
  { id: "soup-1", title: "Caldo De Pollo", price: "" },
  { id: "soup-2", title: "Caldo De Res", price: "" },
  { id: "soup-3", title: "Albondigas", price: "" },
  { id: "soup-4", title: "Pozole", price: "" },
  { id: "soup-5", title: "Tlalpeno", price: "" },
  { id: "soup-6", title: "Menudo", price: "" },
];

const seafood = [
  { id: "fish-1", title: "Shrimp Rancheros", price: "" },
  { id: "fish-2", title: "Shrimp in Garlic Sauce", price: "" },
  { id: "fish-3", title: "Breaded Shrimp", price: "" },
  { id: "fish-4", title: "Shrimps a la Diabla", price: "" },
  { id: "fish-5", title: "Shrimp Cocktail", price: "" },
  { id: "fish-6", title: "Caldo De Camaron", price: "" },
  { id: "fish-7", title: "Caldo De 7 Mares (7 Seas)", price: "" },
  { id: "fish-8", title: "Caldo De Pescado", price: "" },
  { id: "fish-9", title: "Campechana", price: "" },
  { id: "fish-10", title: "Fish Fillet", price: "" },
];

const chimichangas = [
  { id: "chimichanga-1", title: "Chicken Chimichanga", price: "" },
  { id: "chimichanga-2", title: "Beef chimichanga", price: "" },
  { id: "chimichanga-3", title: "Carneasada Chimichanga", price: "" },
  { id: "chimichanga-4", title: "Carnitas Chimichanga", price: "" },
];

const carneasadaFries = [
  { title: "Carneasada fries", price: "" },
  { title: "Half Carne Fries", price: "" },
  { title: "Carnitas Fries", price: "" },
  { title: "Pollo Asado fries", price: "" },
  { title: "Adobada Fries", price: "" },
  { title: "Half Carnitas Fries", price: "" },
  { title: "Half Adobada Fries", price: "" },
  { title: "Half Pollo Asado Fries", price: "" },
];

const surfAndTurfFries = [
  { title: "Surf & Turf Fries", price: "" },
  { title: "Half Surf & Turf Fries", price: "" },
  { title: "Campechana Fries", price: "" },
];

const tortas = [
  { title: "Beef Torta", price: "" },
  { title: "Ham Torta", price: "" },
  { title: "Chicken Torta", price: "" },
  { title: "Machaca Torta", price: "" },
  { title: "Carneasada Torta", price: "" },
  { title: "Carnitas Torta", price: "" },
  { title: "Chorizo Torta", price: "" },
  { title: "Milanesa Torta", price: "" },
  { title: "Pastor Torta", price: "" },
  { title: "Pollo Asado Torta", price: "" },
  { title: "Milanesa Torta + Ham & Cheese", price: "" },
];

const chips = [
  { title: "Carne Asada Chips", price: "" },
  { title: "Carnitas Chips", price: "" },
  { title: "Pastor Chips", price: "" },
  { title: "Pollo Asado Chips", price: "" },
  { title: "Veggie Chips", price: "" },
  { title: "Chips W/ Cheese", price: "" },
  { title: "Chips W/ Guac", price: "" },
  { title: "Nachos", price: "" },
  { title: "Half Carne Asada Chips", price: "" },
  { title: "Half Carnitas Chips", price: "" },
  { title: "Half Pollo Asado Chips", price: "" },
  { title: "Half Adobada Chips", price: "" },
  { title: "Surf & Turf Chips", price: "" },
  { title: "Half Surf & Turf Chips", price: "" },
  { title: "Chips & Salsa", price: "" },
];

const sides = [
  { title: "Small Rice (8oz)", price: "" },
  { title: "Regular Rice (20oz)", price: "" },
  { title: "Large Rice (32oz)", price: "" },
  { title: "Small Beans (8oz)", price: "" },
  { title: "Regular Beans (20oz)", price: "" },
  { title: "Large Rice (32oz)", price: "" },
];

const quesadillas = [
  { title: "Camaron Quesadilla", price: "" },
  { title: "Carnitas Quesadilla", price: "" },
  { title: "Carneasada Quesadilla", price: "" },
  { title: "Pollo Asado Quesadilla", price: "" },
  { title: "Pastor Quesadilla", price: "" },
  { title: "Beef Quesadilla", price: "" },
  { title: "Chicken Quesadilla", price: "" },
  { title: "Ham Quesadilla", price: "" },
  { title: "Chicken Chipotle Quesadilla", price: "" },
  { title: "Plain Quesadilla", price: "" },
];

const superQuesadillas = [
  { title: "Carnitas Super Quesadilla", price: "" },
  { title: "Carneasada Super Quesadilla", price: "" },
  { title: "Pollo Asado Super Quesadilla", price: "" },
  { title: "Pastor Super Quesadilla", price: "" },
  { title: "Beef Super Quesadilla", price: "" },
  { title: "Chicken Super Quesadilla", price: "" },
  { title: "Ham Super Quesadilla", price: "" },
  { title: "Chicken Chiptole Super Quesadilla", price: "" },
  { title: "Camaron Super Quesadilla", price: "" },
  { title: "Mary Tierra Super Quesadilla", price: "" },
];

const tacos = [
  { title: "Carneasada Taco", price: "" },
  { title: "Carnitas Taco", price: "" },
  { title: "Pollo Asado taco", price: "" },
  { title: "Fish Taco", price: "" },
  { title: "Shrimp Taco", price: "" },
  { title: "Pastor Taco", price: "" },
  { title: "3 Roll Tacos (Cheese only)", price: "" },
  { title: "3 Roll Tacos W/ Guac", price: "" },
  { title: "Chicken Taco", price: "" },
  { title: "Beef Taco", price: "" },
  { title: "Mulita", price: "" },
  { title: "Beef or Chicken or Potato Taco", price: "" },
];

const extra = [
  { title: "French Fries", price: "" },
  { title: "Tortilla", price: "" },
  { title: "Beans", price: "" },
  { title: "Guacamole", price: "" },
  { title: "Rice", price: "" },
  { title: "Sour Cream", price: "" },
  { title: "Cheese", price: "" },
  { title: "Egg", price: "" },
  { title: "Bunuelos", price: "" },
  { title: "Ham", price: "" },
  { title: "Bacon", price: "" },
  { title: "Sausage", price: "" },
  { title: "Tamale", price: "" },
  { title: "8oz Sour Cream", price: "" },
  { title: "Box of Chips & Salsa", price: "" },
  { title: "Carneasada", price: "" },
  { title: "Shrimp", price: "" },
  { title: "8oz Guac", price: "" },
  { title: "Any Enchilada", price: "" },
  { title: "Chile Relleno", price: "" },
];

const hamburgers = [
  { title: "Jumbo Double Meat & Cheese", price: "" },
  { title: "Cheeseburger", price: "" },
  { title: "Cheeseburger W/ Fries", price: "" },
  { title: "Hamburger", price: "" },
  { title: "French Fries", price: "" },
];

const salads = [
  { title: "Shrimp Salad", price: "" },
  { title: "Chicken Salad", price: "" },
  { title: "Pollo Asado Salad", price: "" },
  { title: "Carneasada Salad", price: "" },
  { title: "Green Salad", price: "" },
  { title: "Surf & Turf Salad", price: "" },
];

const partyPacks = [
  { title: "Chips & Salsa (20 People)", price: "" },
  { title: "Quesadilla Tray", price: "" },
  { title: "Rolled Tacos (Platter of 50)", price: "" },
  { title: "Enchilada (Platter of 20)", price: "" },
  { title: "Make Your Own Tacos", price: "" },
  { title: "Side Orders (Serves 20)", price: "" },
];

const drinks = [
  { title: "Soda Can", price: "" },
  { title: "Coke Glass Bottles", price: "" },
  { title: "Aguas Frescas (Medium)", price: "" },
  { title: "Aguas Frescas (Large)", price: "" },
  { title: "Coffee", price: "" },
  { title: "Water Bottle", price: "" },
  { title: "Milk", price: "" },
];

const kidsMenu = [
  { title: "Kids Quesadilla Combo", price: "" },
  { title: "Kids Bean & Cheese Burrito", price: "" },
];

const Menu = () => {
  return (
    <section className="max-w-5xl mx-auto py-8">
      <div className="shadow-xl bg-white">
        <div>
          <h2 className="text-center uppercase font-bold text-3xl pt-8">
            Explore our menu
          </h2>
          <img
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
                  <div className="flex flex-col">
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
