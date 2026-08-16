"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  CircleHelp,
  Search,
  ShieldCheck,
} from "lucide-react";

import UniversalHero from "@/components/layout/universal-hero";
import faqSections from "./faq";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("all");

  const filteredSections = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return faqSections
        .filter(
          (section) =>
            activeSection === "all" ||
            section.number === activeSection
        )
        .map((section) => ({
          ...section,
          faqs: section.faqs,
        }));
    }

    const searchWords = query
      .split(/\s+/)
      .map((word) => word.trim())
      .filter(Boolean);

    return faqSections
      .map((section) => {
        const matchedFaqs = section.faqs.filter((faq) => {
          const searchableText = [
            section.title,
            faq.question,
            faq.answer,
            faq.help,
            ...(faq.bullets ?? []),
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

          return searchWords.every((word) =>
            searchableText.includes(word)
          );
        });

        if (!matchedFaqs.length) return null;

        return {
          ...section,
          faqs: matchedFaqs,
        };
      })
      .filter(
        (
          section
        ): section is (typeof faqSections)[number] =>
          section !== null
      );
  }, [search, activeSection]);

  const resultCount = useMemo(
    () =>
      filteredSections.reduce(
        (total, section) => total + section.faqs.length,
        0
      ),
    [filteredSections]
  );

  const totalQuestions = useMemo(
    () =>
      faqSections.reduce(
        (total, section) => total + section.faqs.length,
        0
      ),
    []
  );

  const clearSearch = () => {
    setSearch("");
    setActiveSection("all");
    setOpenFaq(null);
  };

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero */}
      <UniversalHero page="FAQ" />

      {/* Intro */}
      <section className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl py-middel text-center md:py-sections">
          <h1 className="text-3xl font-semibold tracking-tight text-primary md:text-5xl">
            Property in Thailand, explained simply.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl leading-7 text-muted-foreground">
            Buying, selling or owning property in Koh Phangan can
            raise many questions — particularly for international
            buyers.
          </p>

          <p className="mx-auto mt-4 max-w-3xl leading-7 text-muted-foreground">
            We have put together practical answers to the questions
            we hear most often.
          </p>

          {/* Information box */}
          <div className="mx-auto mt-7 max-w-3xl rounded-2xl border border-primary/10 bg-primary/5 p-5 md:p-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <p className="text-sm leading-6 text-muted-foreground md:text-base">
                Our role is not to replace your lawyer, accountant,
                architect or other specialist. We help you understand
                the property, identify the important questions and
                coordinate the right professionals when specialist
                advice is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search + Stats */}
      <section className="container mx-auto px-4 pb-middel md:pb-sections">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-stretch gap-4 md:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <input
                type="search"
                value={search}
                onChange={(event) => {
                  const value = event.target.value;

                  setSearch(value);
                  setOpenFaq(null);

                  /*
                   * When searching, always search all categories.
                   */
                  if (value.trim()) {
                    setActiveSection("all");
                  }
                }}
                autoComplete="off"
                spellCheck={false}
                placeholder="Search questions about property in Koh Phangan..."
                className="h-14 w-full rounded-xl border border-border bg-background pl-12 pr-12 text-center outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />

              {search && (
                <button
                  type="button"
                  onClick={clearSearch}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              )}
            </div>

            {/* Stats */}
            <div className="flex h-14 items-center justify-center gap-3 rounded-xl bg-muted px-5 md:min-w-[220px]">
              <CircleHelp className="h-5 w-5 text-primary" />

              <span className="text-sm font-medium">
                {search.trim()
                  ? `${resultCount} ${
                      resultCount === 1 ? "result" : "results"
                    }`
                  : `${totalQuestions} property questions`}
              </span>
            </div>
          </div>

          {/* Search Result Message */}
          {search.trim() && (
            <div className="mt-4 flex flex-col items-center justify-center gap-2 text-center sm:flex-row">
              <p className="text-sm text-muted-foreground">
                {resultCount}{" "}
                {resultCount === 1 ? "result" : "results"} found
                for{" "}
                <span className="font-medium text-foreground">
                  &quot;{search}&quot;
                </span>
              </p>

              <button
                type="button"
                onClick={clearSearch}
                className="text-sm font-medium text-primary transition-opacity hover:opacity-70"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Category Navigation */}
      <section className="container mx-auto px-4 pb-middel">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveSection("all");
                setSearch("");
                setOpenFaq(null);
              }}
              className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                activeSection === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/70"
              }`}
            >
              All Questions
            </button>

            {faqSections.map((section) => (
              <button
                key={section.number}
                type="button"
                onClick={() => {
                  setActiveSection(section.number);
                  setSearch("");
                  setOpenFaq(null);
                }}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  activeSection === section.number
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/70"
                }`}
              >
                {section.number} — {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-muted/40 px-4 py-middel md:py-sections">
        <div className="container mx-auto">
          <div className="mx-auto max-w-5xl space-y-14">
            {filteredSections.length > 0 ? (
              filteredSections.map((section) => {
                const Icon = section.icon;

                return (
                  <div
                    key={section.number}
                    id={`faq-${section.number}`}
                    className="text-center"
                  >
                    {/* Section Heading */}
                    <div className="mb-6 flex flex-col items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>

                      <span className="mt-4 text-sm font-semibold tracking-wider text-primary">
                        {section.number}
                      </span>

                      <h2 className="mt-1 text-2xl font-semibold md:text-3xl">
                        {section.title}
                      </h2>
                    </div>

                    {/* Questions */}
                    <div className="mx-auto max-w-4xl space-y-3">
                      {section.faqs.map((faq, index) => {
                        const id = `${section.number}-${index}`;
                        const isOpen = openFaq === id;

                        return (
                          <div
                            key={faq.question}
                            className="overflow-hidden rounded-xl border border-border/70 bg-background text-center"
                          >
                            {/* Question */}
                            <button
                              type="button"
                              onClick={() =>
                                setOpenFaq(
                                  isOpen ? null : id
                                )
                              }
                              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-center md:px-6"
                              aria-expanded={isOpen}
                            >
                              <div className="flex flex-1 items-center justify-center gap-3">
                                <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
                                  <CircleHelp className="h-4 w-4" />
                                </span>

                                <span className="text-center text-base font-semibold md:text-lg">
                                  {faq.question}
                                </span>
                              </div>

                              <ChevronDown
                                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {/* Answer */}
                            <div
                              className={`grid transition-all duration-300 ${
                                isOpen
                                  ? "grid-rows-[1fr]"
                                  : "grid-rows-[0fr]"
                              }`}
                            >
                              <div className="overflow-hidden">
                                <div className="px-5 pb-6 md:px-8">
                                  <div className="mx-auto max-w-3xl">
                                    <p className="leading-7 text-muted-foreground">
                                      {faq.answer}
                                    </p>

                                    {/* Bullets */}
                                    {faq.bullets &&
                                      faq.bullets.length > 0 && (
                                        <ul className="mx-auto mt-5 max-w-2xl space-y-2">
                                          {faq.bullets.map(
                                            (item) => (
                                              <li
                                                key={item}
                                                className="flex items-start justify-center gap-2.5 text-center text-sm text-muted-foreground"
                                              >
                                                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                                                <span>
                                                  {item}
                                                </span>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}

                                    {/* Help */}
                                    {faq.help && (
                                      <div className="mx-auto mt-5 max-w-2xl rounded-xl border border-primary/10 bg-primary/5 p-4 md:p-5">
                                        <div className="flex flex-col items-center gap-3 text-center">
                                          <CheckCircle className="h-5 w-5 text-primary" />

                                          <div>
                                            <p className="text-sm font-semibold">
                                              How Tropical Roots
                                              Helps
                                            </p>

                                            <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                                              {faq.help}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              /* No Results */
              <div className="mx-auto max-w-xl py-16 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-primary">
                  No results found
                </h3>

                <p className="mt-2 text-muted-foreground">
                  We couldn&apos;t find any questions matching{" "}
                  <span className="font-medium text-foreground">
                    &quot;{search}&quot;
                  </span>
                  .
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Try another keyword such as buying, selling,
                  ownership, rent, lease, tax or property
                  management.
                </p>

                <button
                  type="button"
                  onClick={clearSearch}
                  className="mt-5 text-sm font-medium text-primary transition-opacity hover:opacity-70"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Owner Promise */}
      <section className="container mx-auto px-4 py-middel md:py-sections">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-background">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="flex flex-col items-center justify-center bg-primary p-7 text-center text-primary-foreground md:p-10">
              <span className="text-sm uppercase tracking-[0.2em] text-white/70">
                Our Promise to Owners
              </span>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Your property deserves more than a listing.
              </h2>

              <p className="mt-5 leading-7 text-white/80">
                We will never promise a sale price or timeline
                simply to win your listing.
              </p>
            </div>

            {/* Right */}
            <div className="p-7 text-center md:p-10">
              <p className="leading-7 text-muted-foreground">
                We promise to present your property professionally,
                market it properly, communicate clearly and work
                efficiently.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Professional presentation",
                  "Proper marketing",
                  "Clear communication",
                  "Efficient coordination",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-2 rounded-lg bg-muted/50 p-3"
                  >
                    <CheckCircle className="h-4 w-4 text-primary" />

                    <span className="text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-linear-to-b from-primary via-primary/90 to-primary/60 px-4 py-middel md:py-sections">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <span className="text-sm uppercase tracking-[0.25em] text-white/70">
              Our Philosophy
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
              Property is not just a transaction.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80 md:text-xl">
              It is a relationship that can continue for years.
            </p>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-white/70">
              You may first contact us because you want to buy a
              villa. Later, you may need a tenant, maintenance,
              renovation, construction, property management or a
              future sale.
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-medium leading-7 text-white/90">
              We want Tropical Roots Realty to be the company you
              can continue to call throughout that journey.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                "Local Knowledge",
                "Professional Service",
                "Long-Term Relationships",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-middel md:py-sections">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <CircleHelp className="h-6 w-6 text-primary" />
          </div>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Still have a question?
          </h2>

          <p className="mt-4 leading-7 text-muted-foreground">
            Every property is different. If you have a question
            about buying, selling, renting, maintaining or
            developing property in Koh Phangan, contact us and
            we&apos;ll help you find the right answer.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all hover:gap-3 hover:opacity-90"
          >
            Ask Us a Question
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="container mx-auto px-4 pb-middel md:pb-sections">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border/70 bg-muted/30 p-5 text-center md:p-7">
          <div className="flex flex-col items-center gap-4">
            <ShieldCheck className="h-6 w-6 text-primary" />

            <div>
              <h3 className="font-semibold">
                Important Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This FAQ is for general information only and is
                not legal, tax, financial, architectural or
                engineering advice. Thai laws, regulations, taxes
                and local requirements can change.
                Property-specific professional advice should be
                obtained before making a transaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}