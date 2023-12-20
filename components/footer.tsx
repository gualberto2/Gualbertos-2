import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const footer = () => {
  return (
    <footer className=" bg-green-100 w-full  bottom-0">
      <Separator />
      <div className="cursor-pointer text-sm flex flex-row whitespace-nowrap px-8 mt-8 space-x-2 justify-center tracking-wider">
        {/* ehader tabs */}
        <p className="underline text-green-900">
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=5447+Kearny+Villa+Rd,+San+Diego,+CA+92123"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit
          </Link>
        </p>
        <p className="underline text-green-900">
          <Link href="/menu">Menu</Link>
        </p>
        <p className="underline text-green-900">
          <Link href="/about">Story</Link>
        </p>
        <p className="underline text-green-900">
          <Link href="/apply">Join Our Team</Link>
        </p>
        <p className="underline text-green-900">
          <Link href="/contact">Contact</Link>
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-8 ">
        <div className="content-center flex justify-center items-center">
          {/* Logo here */}
          <p className="font-light text-xs  text-center cursor-pointer hover:text-gray-500 transition duration-150 ease-in-out">
            <Link
              href="https://www.google.com/maps/dir/?api=1&destination=5447+Kearny+Villa+Rd,+San+Diego,+CA+92123"
              target="_blank"
              rel="noopener noreferrer"
            >
              5447 Kearny Villa Rd, San Diego, CA 92123
            </Link>
          </p>
        </div>
      </div>
      <div className="cursor-pointer text-sm flex flex-row whitespace-nowrap px-8 mt-8 pb-12 space-x-2 justify-center tracking-tight">
        {/* social medias */}
        <p className="underline text-green-900">
          <Link href="https://www.instagram.com/gualbertos2tacoshop/">
            Instagram
          </Link>
        </p>
        <p className="underline text-green-900">
          <Link href="https://www.facebook.com/profile.php?id=100063684715593">
            Facebook
          </Link>
        </p>
        <p className="underline text-green-900">
          <Link href="https://www.restaurantji.com/ca/san-diego/gualbertos-2-/">
            RestarauntJi
          </Link>
        </p>
      </div>
    </footer>
  );
};
export default footer;
