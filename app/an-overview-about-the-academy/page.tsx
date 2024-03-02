import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AAMBFSYE - Overview",
  description: "An Overview About the Academy.",
};

export default function OverviewPage() {
  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">
            An Overview About the Academy
          </h1>
        </div>
      </section>
      <section className="container flex flex-col items-center gap-8 py-8 text-center">
        <p>
          The Arab Academy for Management, Banking, and Financial Science was
          established in 1988 through the General Assembly of the Arab Banks
          Union, and operates within the framework of the Joint Arab Work
          System, with headquarters in Cairo.
        </p>
        <p>
          The Academy in Yemen was established in 2006 to offer degrees in
          accordance with the Yemen education system and has graduated over 30
          cohorts, many of whom hold prestigious positions in the private and
          public sectors and civil society organizations.
        </p>
        <p>
          The Academy is a member of the Economic and Social Council, the Higher
          Coordination Committee for Joint Arab Work Institutions, and the Arab
          Economic Unity Council. It is one of the leading and specialized
          institutions in the fields of education, training, and scientific and
          professional qualification, and has been committed.
        </p>
        <h2 className="text-[1.5rem] font-bold">Our Mission</h2>
        <p>
          The Arab Academy for Management, Banking, and Financial Science
          (AAMBFS) has been operating as the “Academy for all Arabs”. Over the
          years, it has become a center that inspires all Arab professionals in
          the financial and business sectors, providing them with scientific and
          academic knowledge.
        </p>
        <p>
          Equipped with strong curricula that compete with the highest ranking
          standards in the world, AAMBFS is designed to create a new generation
          ready to bring about change in their communities throughout the Arab
          world.
        </p>
        <h2 className="text-[1.5rem] font-bold">Our Vision</h2>
        <p>
          Our vision is to have a significant impact on the financial and
          banking services, as well as various fields in the business sector in
          the Arab world. AAMBFS strives to create an environment that supports
          and inspires individuals involved in these sectors to realize their
          potential and achieve their dreams.
        </p>
        <h2 className="text-[1.5rem] font-bold">Our Services</h2>
        <p>The Academy offers its services in the following areas:</p>
        <ul className="flex flex-col gap-4">
          <li>
            <Link href="/masters-programs" className="text-secondary">
              Education
            </Link>
          </li>
          <li>
            <Link href="/training" className="text-secondary">
              Training
            </Link>
          </li>
          <li>
            <Link href="/consultancy" className="text-secondary">
              Consultancy
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
