import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  description: string;
  children: ReactNode;
};

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalPage({
  title,
  description,
  children,
}: LegalPageProps) {
  return (
    <main className="bg-white px-5 py-16 sm:px-8 sm:py-24">
      <article className="mx-auto max-w-3xl">
        <header className="mb-12 border-b border-gray-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-800">
            Legal information
          </p>
          <h1 className="text-4xl font-semibold text-gray-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
            {description}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: September 7, 2026
          </p>
        </header>
        <div className="space-y-10">{children}</div>
      </article>
    </main>
  );
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-950">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-7 text-gray-700 [&_a]:font-medium [&_a]:text-green-800 [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
