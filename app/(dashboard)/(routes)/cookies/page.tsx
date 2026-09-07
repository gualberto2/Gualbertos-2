import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy | Gualberto's 2",
  description: "How cookies and similar technologies are used on this site.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="This policy describes the limited use of cookies and similar technologies on gualbertos2.com."
    >
      <LegalSection title="1. What cookies are">
        <p>
          Cookies are small text files stored by a browser. Similar technologies
          can also store or transmit information needed to operate, secure, or
          measure a website.
        </p>
      </LegalSection>

      <LegalSection title="2. Technologies used on this website">
        <ul>
          <li>
            <strong>Security:</strong> The contact form uses Google reCAPTCHA to
            detect spam, fraud, and abuse. reCAPTCHA may set the{" "}
            <code>_grecaptcha</code> cookie and process technical and interaction
            data for that purpose.
          </li>
          <li>
            <strong>Analytics:</strong> Vercel Web Analytics provides aggregated
            information about visits, routes, referrers, approximate location,
            browsers, operating systems, and device types. It is designed to
            operate without third-party cookies or cross-site visitor tracking.
          </li>
        </ul>
        <p>
          We do not currently use advertising cookies or cookies to build a
          profile of your activity across unrelated websites.
        </p>
      </LegalSection>

      <LegalSection title="3. Third-party websites">
        <p>
          Ordering, delivery, maps, and social-media links open independent
          third-party websites. Those services may use their own cookies after
          you visit them. Their cookie and privacy policies, not this policy,
          govern those technologies.
        </p>
      </LegalSection>

      <LegalSection title="4. Managing cookies">
        <p>
          Most browsers let you view, block, or delete cookies through their
          privacy settings. Blocking a security cookie may prevent reCAPTCHA or
          the contact form from working correctly. Because this site currently
          uses only security cookies and cookieless analytics, it does not offer
          a separate advertising-cookie preference panel.
        </p>
      </LegalSection>

      <LegalSection title="5. Changes and contact">
        <p>
          We may update this policy when our use of technology changes. Questions
          may be sent to{" "}
          <a href="mailto:hello@gualbertos2.com">
            hello@gualbertos2.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
