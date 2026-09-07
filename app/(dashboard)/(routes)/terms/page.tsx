import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | Gualberto's 2",
  description: "Terms governing use of the Gualberto's 2 website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      description="These terms govern your use of gualbertos2.com and the information and services available through this website."
    >
      <LegalSection title="1. Acceptance of these terms">
        <p>
          By accessing or using this website, you agree to these Terms &amp;
          Conditions. If you do not agree, please do not use the website. This
          site is operated for Gualberto&apos;s 2, located at 5447 Kearny Villa
          Rd, San Diego, California 92123.
        </p>
      </LegalSection>

      <LegalSection title="2. Website information">
        <p>
          We work to keep our menu, prices, hours, location information, and
          other content accurate. Items, ingredients, prices, availability,
          promotions, and hours may change without notice. Please contact the
          restaurant if you need to confirm current information before visiting
          or ordering.
        </p>
      </LegalSection>

      <LegalSection title="3. Food and allergen information">
        <p>
          If you have a food allergy or dietary restriction, speak directly
          with restaurant staff before ordering. Our kitchen handles common
          allergens, and we cannot guarantee that any menu item is completely
          free from allergens or cross-contact.
        </p>
      </LegalSection>

      <LegalSection title="4. Orders and third-party services">
        <p>
          This website may link to independent ordering, delivery, mapping, and
          social-media services. Transactions placed through those services are
          also governed by their own terms and privacy practices. Gualberto&apos;s
          2 is not responsible for the availability, accuracy, security, or
          operation of an independent third-party service.
        </p>
      </LegalSection>

      <LegalSection title="5. Forms and communications">
        <p>
          Information submitted through our contact or subscription forms must
          be accurate and must not be unlawful, threatening, abusive, or
          harmful. When you contact us, you authorize us to respond using the
          contact information you provide. Promotional communications may be
          discontinued by following any included opt-out instructions or by
          contacting us.
        </p>
      </LegalSection>

      <LegalSection title="6. Acceptable use">
        <p>You may not use this website to:</p>
        <ul>
          <li>Violate applicable law or another person&apos;s rights.</li>
          <li>Attempt to access systems or data without authorization.</li>
          <li>Introduce malicious code or interfere with website operation.</li>
          <li>Scrape, copy, or reuse content in a misleading or unlawful way.</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Intellectual property">
        <p>
          The website&apos;s branding, text, photographs, graphics, and design are
          owned by Gualberto&apos;s 2 or used with permission and are protected by
          applicable intellectual-property laws. Personal, noncommercial use of
          the website is permitted; no other rights are granted.
        </p>
      </LegalSection>

      <LegalSection title="8. Disclaimers and limitation of liability">
        <p>
          The website is provided on an “as is” and “as available” basis. To
          the fullest extent permitted by law, we disclaim implied warranties
          and are not liable for indirect, incidental, special, consequential,
          or punitive damages arising from use of the website or a linked
          third-party service. Nothing in these terms limits liability that
          cannot legally be limited.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law and changes">
        <p>
          These terms are governed by California law, without regard to
          conflict-of-law principles. Any permitted dispute relating to the
          website will be brought in a court with jurisdiction in San Diego
          County, California. We may update these terms by posting a revised
          version and changing the date above.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact us">
        <p>
          Questions about these terms may be sent to{" "}
          <a href="mailto:hello@gualbertos2.com">
            hello@gualbertos2.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
