import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Academic Rules and Regulations",
  description: "Academic Rules and Regulations",
};

export default function OverviewPage() {
  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">
            Academic Rules and Regulations
          </h1>
        </div>
      </section>
      <section className="container flex flex-col items-start gap-4 py-8">
        <h2 className="text-[1.25rem] font-bold">
          Admission and Registration Guide
        </h2>
        <p>
          This guide contains the the key information about the academic
          programs available at the academy and details of the courses in each
          program. You will also find admission and registration procedures and
          other information related to admission and registration.
        </p>
        <Button variant="secondary">
          Download the Admission and Registration Guide
        </Button>
        <h2 className="text-[1.25rem] font-bold">Academic Regulations</h2>
        <h2 className="text-[1.25rem] font-bold">Student Guide</h2>
        <h2 className="text-[1.25rem] font-bold">Academic Schedules</h2>
        <p>It contains the details of current courses and lecture times</p>
        <Button variant="secondary">Download Class Schedules</Button>
      </section>
    </main>
  );
}
