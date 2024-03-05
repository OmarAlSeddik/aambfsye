import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AAMBFSYE - Admission and Registration",
  description: "Admission and Registration",
};

export default function OverviewPage() {
  return (
    <main className="flex flex-col gap-4 py-8">
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">Admission and Registration</h1>
        </div>
      </section>
      <section className="container flex flex-col gap-4">
        <h2 className="text-[1.25rem] font-bold">Available Majors</h2>
        <h3 className="text-[1.5rem] font-bold">
          Department of Administrative Sciences Programs
        </h3>
        <ul className="list-disc">
          <li className="ml-8">
            <Link href="" className="text-secondary">
              Phd Program in Business Adminstration
            </Link>
          </li>
          <li className="ml-8">
            <Link href="" className="text-secondary">
              MSc program in Business Administration (Arabic)
            </Link>
          </li>
          <li className="ml-8">
            <Link href="" className="text-secondary">
              MSc program in Business Administration (English)
            </Link>
          </li>
        </ul>
        <h3 className="text-[1.5rem] font-bold">
          Department of Accounting and Finance Programs
        </h3>
        <ul className="list-disc">
          <li className="ml-8">
            <Link href="" className="text-secondary">
              MSc Program in Financial Management
            </Link>
          </li>
          <li className="ml-8">
            <Link href="" className="text-secondary">
              MSc Program in Accounting
            </Link>
          </li>
          <li className="ml-8">
            <Link href="" className="text-secondary">
              MSc Program in Banking
            </Link>
          </li>
        </ul>
        <h3 className="text-[1.5rem] font-bold">
          Department of Computer Information Systems Programs
        </h3>
        <ul className="list-disc">
          <li className="ml-8">
            <Link href="" className="text-secondary">
              MSc Program in Computer Information Systems
            </Link>
          </li>
        </ul>
      </section>
      <section className="container flex flex-col gap-4">
        <h2 className="text-[1.25rem] font-bold">
          Admission and Registration Requirements
        </h2>
        <p>
          For admission to the master’s program in the Department of
          Administrative Sciences, the applicant must have:
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            Bachelor’s degree with at least a good grade from the following
            faculties: Commerce and Economics, Administrative, Financial and
            Banking Sciences, Administrative Sciences, or a Bachelor’s degree
            from any other college, provided that the remedial courses specified
            by the Academy are studied and passed.
          </li>
          <li className="ml-8">
            Higher diploma degree from the Arab Academy for Management,
            Financial and Banking Sciences, with an average of at least 75%, and
            that the student’s average is not less than good in the bachelor’s
            degree.
          </li>
        </ul>
        <p>
          For admission to the master’s program in the Department of Accounting
          and Finance is that the applicant must have:
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            Bachelor’s degree with at least a good grade from the following
            faculties: Commerce and Economics, Administrative, Financial and
            Banking Sciences, Administrative Sciences.
          </li>
          <li className="ml-8">
            Higher diploma degree from the Arab Academy for Management,
            Financial and Banking Sciences, with an average of at least 75%, and
            that the student’s average is not less than good in the bachelor’s
            degree.
          </li>
        </ul>
        <p>
          For admission to master’s programs in Computer Information Systems,
          the applicant must have:
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            Bachelor’s degree with at least a good grade from the following
            colleges: Computer Science, Computer Systems, Computer Engineering
            or Information Technology, Science (Mathematics/Computer). With
            completing remedial courses, if any.
          </li>
          <li className="ml-8">
            Higher diploma degree from the Arab Academy for Management ,
            Financial and Banking Sciences in computer information systems, with
            an average of at least 75%, and that the student’s average is not
            less than good in the bachelor’s degree.
          </li>
        </ul>
      </section>
      <section className="container flex flex-col gap-4">
        <h2 className="text-[1.25rem] font-bold">The required documents:</h2>
        <ul className="list-disc">
          <li className="ml-8">
            A true copy of the graduation certificate after authentication or
            its equivalent from the Ministry of Higher Education.
          </li>
          <li className="ml-8">
            A true copy of the academic transcript record after authentication
            or its equivalent from the Ministry of Higher Education.
          </li>
          <li className="ml-8">
            A copy of personal identity (ID card or passport)
          </li>
          <li className="ml-8">(3) 6*4 personal photos</li>
        </ul>
      </section>
    </main>
  );
}
