import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AAMBFSYE - Why Academy?",
  description: "Why Academy?",
};

export default function OverviewPage() {
  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">Why Academy?</h1>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-4 py-8 text-center">
        <p>
          The Arab Academy for Management, Banking and Financial Sciences offers
          an unparalleled applied learning experience for its students. We pride
          ourselves for our unrivaled high-class courses that have been designed
          as a result of round-table discussions of renowned academicians and
          practitioners in each specialization.
        </p>
        <p>
          Our curriculum is designed to help our students build general
          management and leadership skills. Through case studies, we place our
          students into the shoes of skilled market leaders to put the
          theoretical knowledge of our students to the test and learn how to
          make tough decisions and become the leader who makes an impact in the
          world.
        </p>
        <div className="relative aspect-[3.75/1] w-full overflow-hidden rounded">
          <Image
            src="/other/slider-hp2.webp"
            alt="Students Raising Hands"
            fill
          />
        </div>
        <h2 className="font-bold">
          A number of AAMBFS students were enrolled in Harvard Business School,
          New Jersey Institute of Technology, Kent State University, City
          University, Liverpool University.
        </h2>
        <p>
          AAMBFS is designed to inspire aspiring minds, empower high- caliber
          individuals and organisations in the business and finance sectors to
          lead with impact, make a change and add tangible values to the
          community.
        </p>
      </section>
    </main>
  );
}
