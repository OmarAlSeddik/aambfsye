import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Educational Philosophy",
  description: "Educational Philosophy",
};

export default function OverviewPage() {
  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">Educational Philosophy</h1>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-4 py-8 text-center">
        <p>
          Learning is important; knowing how to apply it on the job is even more
          so. Therefore, AAMBFS is keen on hiring the highest caliber of
          instructors who have advanced degrees and years of real
          world-experience, to ensure the students learn skills they can use in
          advancing their own career paths.
        </p>
        <p>
          The AAMBFS employs a variety of contemporary techniques, including
          case studies, discussion groups, group projects, simulation, computer
          applications, and summer internships.
        </p>
      </section>
    </main>
  );
}
