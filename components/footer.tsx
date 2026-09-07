import Link from "next/link";
import { Separator } from "./ui/separator";

const primaryLinks = [
  {
    label: "Visit",
    href: "https://www.google.com/maps/dir/?api=1&destination=5447+Kearny+Villa+Rd,+San+Diego,+CA+92123",
    external: true,
  },
  { label: "Menu", href: "/menu" },
  { label: "Story", href: "/about" },
  { label: "Join Our Team", href: "/apply" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gualbertos2tacoshop/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063684715593",
  },
  {
    label: "Restaurantji",
    href: "https://www.restaurantji.com/ca/san-diego/gualbertos-2-/",
  },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-green-100">
      <Separator />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm tracking-wider"
        >
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-green-900 underline underline-offset-4 transition-colors hover:text-green-700"
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <address className="mt-8 text-center text-xs font-light not-italic">
          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=5447+Kearny+Villa+Rd,+San+Diego,+CA+92123"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-gray-500"
          >
            5447 Kearny Villa Rd, San Diego, CA 92123
          </Link>
        </address>

        <nav
          aria-label="Social media"
          className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm tracking-tight"
        >
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-900 underline underline-offset-4 transition-colors hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 border-t border-green-900/15 pt-6">
          <nav
            aria-label="Legal"
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs"
          >
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-green-900 underline underline-offset-4 transition-colors hover:text-green-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-4 text-center text-xs text-green-950/70">
            © {new Date().getFullYear()} Gualberto&apos;s 2. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
