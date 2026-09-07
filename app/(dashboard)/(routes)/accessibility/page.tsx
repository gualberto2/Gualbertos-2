import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Accessibility | Gualberto's 2",
  description: "Gualberto's 2 website accessibility statement.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      description="Gualberto's 2 wants its website and restaurant information to be accessible to every guest."
    >
      <LegalSection title="Our commitment">
        <p>
          We are working to provide a website that is usable by people with a
          wide range of abilities and assistive technologies. Accessibility is
          an ongoing effort, and we welcome feedback when something can be
          improved.
        </p>
      </LegalSection>

      <LegalSection title="Need help accessing information?">
        <p>
          If you have difficulty using this website or need menu, location,
          ordering, or contact information in another format, email{" "}
          <a href="mailto:hello@gualbertos2.com">
            hello@gualbertos2.com
          </a>{" "}
          or call <a href="tel:+18582683209">(858) 268-3209</a>. Please describe
          the page, information, or feature you need and the best way to reach
          you.
        </p>
      </LegalSection>

      <LegalSection title="Third-party services">
        <p>
          Some ordering, delivery, maps, and social-media features are provided
          by independent third parties. We welcome reports about barriers in
          reaching those services and can help identify another way to obtain
          restaurant information where reasonably possible.
        </p>
      </LegalSection>

      <LegalSection title="Feedback">
        <p>
          We aim to acknowledge accessibility feedback within a reasonable time
          and use it to guide future improvements. You may also write to
          Gualberto&apos;s 2, 5447 Kearny Villa Rd, San Diego, CA 92123.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
