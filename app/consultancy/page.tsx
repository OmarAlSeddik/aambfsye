import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Consultancy",
  description: "Consultancy",
};

export default function OverviewPage() {
  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">Consultancy</h1>
        </div>
      </section>
      <section className="container flex flex-col gap-4 py-8">
        <p>
          The academy provides its consulting services to its client base, which
          consist of four important stages, which are:
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            Preliminary survey of the situation of the institution/bank
            requesting consultation and submitting a report in this regard.
          </li>
          <li className="ml-8">
            Contracting with the concerned institution/bank, including
            consultation procedures, scheduling, required expertise, and based
            on cooperation with a supporting team nominated by the beneficiary
            to collaborate with experts and receive training to carry out the
            consulting task.
          </li>
          <li className="ml-8">
            Execution of the consulting task according to the contract.
          </li>
          <li className="ml-8">
            Supervision of the implementation and training, as agreed upon with
            the beneficiary institution.
          </li>
        </ul>
        <h2 className="text-[1.25rem] font-bold">
          Fields of Consultancy Services
        </h2>
        <ul className="list-disc">
          <li className="ml-8">Developing comprehensive and sub-strategies.</li>
          <li className="ml-8">
            Preparing marketing research and feasibility studies (technical,
            economic, marketing, and financial).
          </li>
          <li className="ml-8">
            Developing banking, financial, economic, administrative processes
            and enhancing their capabilities, performance, and modernization.
          </li>
          <li className="ml-8">
            Transfer, adaptation, and utilization of technology.
          </li>
          <li className="ml-8">Developing financial and accounting systems.</li>
          <li className="ml-8">Developing human resources and training.</li>
          <li className="ml-8">
            Organizing and restructuring banks, institutions, companies, and
            government agencies, including restructuring, privatization, and
            transitioning to Islamic banking.
          </li>
          <li className="ml-8">
            Oversight and monitoring, including setting performance standards,
            proposing key performance indicators (KPIs), and preparing internal
            control systems.
          </li>
        </ul>
        <h2 className="text-[1.25rem] font-bold">Consultancy contracts</h2>
        <p>
          The Academy has implemented a number of consulting projects at the
          level of the Arab world, the most important of which are:
        </p>
        <ul className="list-disc">
          <li className="ml-8">
            Computerization of the People’s Credit Bank – Syrian Arab Republic.
          </li>
          <li className="ml-8">
            Modernization and development of the Cooperative and Agricultural
            Credit Bank – Republic of Yemen.
          </li>
          <li className="ml-8">
            Computerization of the Industrial Bank – Syrian Arab Republic.
          </li>
          <li className="ml-8">
            Data migration in industrial banking – Syrian Arab Republic.
          </li>
          <li className="ml-8">
            Converting the National Commercial Bank – Jeddah into an Islamic
            bank.
          </li>
          <li className="ml-8">
            Restructuring the Iraqi banking sector in cooperation with Deliote.
          </li>
          <li className="ml-8">
            In addition to restructuring the following banks and financial
            institutions:
            <ul className="list-circle">
              <li className="ml-8">Banks in Palestine</li>
              <li className="ml-8">Rafidain Bank – Republic of Iraq</li>
              <li className="ml-8">Ministry of Education – Republic of Iraq</li>
              <li className="ml-8">
                Office of Financial Supervision – Republic of Iraq
              </li>
              <li className="ml-8">
                General Secretariat of the Council of Ministers – Republic of
                Iraq
              </li>
              <li className="ml-8">
                Institute of Banking and Financial Studies – Republic of Iraq
              </li>
              <li className="ml-8">
                Bank of the Sahel and Sahara – Libyan Republic
              </li>
              <li className="ml-8">
                Muscat Securities Market – Sultanate of Oman
              </li>
              <li className="ml-8">Syrian Central Bank – Syria</li>
              <li className="ml-8">Agricultural Credit Bank – Yemen</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
}
