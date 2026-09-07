import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Gualberto's 2",
  description: "How Gualberto's 2 collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains what information Gualberto's 2 collects through this website, why we use it, and the choices available to you."
    >
      <LegalSection title="1. Information we collect">
        <p>Depending on how you use the website, we may collect:</p>
        <ul>
          <li>
            Contact-form information, including your name, email address, phone
            number, message, submission identifier, and acceptance of the form
            terms.
          </li>
          <li>
            Subscription information, such as the email address you provide to
            receive offers or updates.
          </li>
          <li>
            Limited technical and usage information, such as the page or route
            visited, time of the visit, referring page, approximate location,
            browser, operating system, and device type.
          </li>
          <li>
            Security and interaction information processed by reCAPTCHA to help
            prevent fraud, spam, and abuse.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. How we use information">
        <p>We may use information to:</p>
        <ul>
          <li>Respond to questions, comments, and support requests.</li>
          <li>Send confirmations and requested communications.</li>
          <li>Provide offers or updates when you subscribe.</li>
          <li>Operate, secure, troubleshoot, and improve the website.</li>
          <li>Understand aggregate website traffic and performance.</li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Service providers and disclosures">
        <p>
          We use service providers to operate the website. These include Google
          Firebase and Cloud Firestore for form-data storage, Mailgun for email
          delivery, Google reCAPTCHA for security and abuse prevention, and
          Vercel for hosting and privacy-focused web analytics. These providers
          may process information on our behalf under their applicable terms.
        </p>
        <p>
          We may also disclose information when required by law, to protect the
          safety and rights of users or others, or as part of a merger, sale,
          financing, or transfer of all or part of the business.
        </p>
      </LegalSection>

      <LegalSection title="4. Sale and targeted advertising">
        <p>
          We do not sell personal information and do not use personal
          information collected through this website for cross-context
          behavioral advertising. If our practices change, we will update this
          policy and provide any choices required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies and analytics">
        <p>
          Vercel Web Analytics is designed to provide aggregate traffic data
          without third-party cookies or cross-site visitor tracking. reCAPTCHA
          may use a security cookie and process technical information to detect
          fraud and abuse. Details and browser controls are described in our
          Cookie Policy.
        </p>
      </LegalSection>

      <LegalSection title="6. Retention and security">
        <p>
          We retain information only as long as reasonably necessary for the
          purposes described here, including responding to requests, keeping
          appropriate business records, resolving disputes, and meeting legal
          obligations. We use reasonable administrative and technical
          safeguards, but no internet transmission or storage system can be
          guaranteed completely secure.
        </p>
      </LegalSection>

      <LegalSection title="7. Your choices and privacy rights">
        <p>
          You may ask to access, correct, or delete personal information you
          submitted through this website, or opt out of promotional email, by
          contacting us. We will verify and respond to requests as required by
          applicable law. Authorized agents may submit requests where permitted
          by law.
        </p>
        <p>
          Because there is no universally accepted standard for browser “Do Not
          Track” signals, the website does not currently respond to them. We do
          not use the information collected through this website for cross-site
          behavioral advertising.
        </p>
      </LegalSection>

      <LegalSection title="8. Children">
        <p>
          This website is intended for a general audience and is not directed
          to children under 13. We do not knowingly collect personal
          information from children under 13. Contact us if you believe a child
          has submitted information so we can review and, where appropriate,
          delete it.
        </p>
      </LegalSection>

      <LegalSection title="9. Third-party links">
        <p>
          Links to ordering, delivery, maps, and social-media services lead to
          sites we do not control. Their privacy policies govern information
          collected after you leave this website.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes and contact">
        <p>
          We may update this policy by posting a revised version and changing
          the date above. Privacy questions or requests may be sent to{" "}
          <a href="mailto:hello@gualbertos2.com">
            hello@gualbertos2.com
          </a>{" "}
          or mailed to Gualberto&apos;s 2, 5447 Kearny Villa Rd, San Diego, CA
          92123.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
