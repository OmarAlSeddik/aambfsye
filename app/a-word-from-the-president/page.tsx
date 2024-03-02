import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AAMBFSYE - Messages & Speeches",
  description: "A Word from the President.",
};

export default function OverviewPage() {
  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">Messages & Speeches</h1>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-8 py-8 md:flex-row">
        <div className="relative aspect-[1/1.384] w-[20rem] overflow-hidden rounded">
          <Image src="/other/hodieb.webp" alt="President" fill />
        </div>
        <div className="flex flex-1 grow-[2] flex-col items-center gap-4 text-center">
          <h2 className="text-[1.5rem] font-bold">
            Welcome to the Arab Academy for Management, Banking and Financial
            Sciences,
          </h2>
          <p>
            Since the inception of the AAMBFS, we have committed ourselves to be
            the one and oldest standing go-to institution offering its students
            with a unique learning experience.
          </p>
          <p>
            Through latest and most advanced learning techniques, we enforce the
            aspiring individuals and entities alike, in the sectors of business
            and finances, to realize their dreams, making leaps in their
            careers, therefore introducing a new generation of change makers and
            decision takers.
          </p>
          <p>
            Engaged with theory and practice, our philosophy is to inspire
            generations to map out their own career paths, take the lead and
            take part in pushing the boundaries of human knowledge. They
            graduate armed with practice in how to make difficult decisions and
            assume leadership.
          </p>
          <h3 className="text-[1.25rem]">Dr. Mostafa Hodeib</h3>
          <h3 className="text-[1.25rem]">
            President of the Arab Academy for Management, Banking and Financial
            Sciences
          </h3>
        </div>
      </section>
    </main>
  );
}
