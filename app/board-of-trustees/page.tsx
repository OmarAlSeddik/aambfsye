import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AAMBFSYE - Board of Trustees",
  description: "Board of Trustees",
};

export default function OverviewPage() {
  const trustees = [
    {
      name: "E. Hamood Bin Sangour Al Zadjali",
      role: "Chairman of Board of Trustees",
      roleCont: "Former CEO of the Central Bank of Oman",
      image: "/board-of-trustees/bin-sangour.webp",
      country: "Oman",
    },
    {
      name: "H.E. Sheikh Abdullah Bin Saoud Al-Thani",
      role: "Governor",
      roleCont: "of the Qatar Central Bank",
      image: "/board-of-trustees/qcb-586x390-400x266-3.webp",
      country: "Qatar",
    },
    {
      name: "H.E. Dr. Ziad Fariz",
      role: "Governor",
      roleCont: "of the Central Bank of Jordan",
      image: "/board-of-trustees/ziad-fariz-2.webp",
      country: "Jordan",
    },
    {
      name: "H.E. Mr. Azzam shawwa",
      role: "Governor",
      roleCont: "of the Palestine Monetary Authority",
      image: "/board-of-trustees/azzam.webp",
      country: "Palestine",
    },
    {
      name: "H.E. Mr. Ali Mohsen Ismail Al- Alaq",
      role: "Governor",
      roleCont: "of the Central Bank of Iraq",
      image: "/board-of-trustees/ali-mohsen.webp",
      country: "Iraq",
    },
    {
      name: "H.E. Dr. AlSedeq Omar Al Kbeer",
      role: "Governor",
      roleCont: "of the Central Bank of Libya",
      image: "/board-of-trustees/alsedeq.webp",
      country: "Libya",
    },
    {
      name: "Prof. BadrEldin Abdelrahim Ibrahim",
      role: "Governor",
      roleCont: "of the Central Bank of Sudan",
      image: "/board-of-trustees/oo.webp",
      country: "Sudan",
    },
    {
      name: "Mr. Joseph Torbey",
      role: "Chairman and General Manager of Credit Libanais",
      roleCont: "Chairman of The Association of Bank in Lebanon",
      image: "/board-of-trustees/joseph55.webp",
      country: "Chairman of the Union of Arab Bankers",
    },
    {
      name: "Mr. Adanan Youssif",
      role: "CEO",
      roleCont: "of the Al-Baraka Banking Group -Bahrain",
      image: "/board-of-trustees/adanan-youssif.webp",
      country: "Bahrain",
    },
    {
      name: "Mr. Hisham Ahmed Okasha",
      role: "Chairman",
      roleCont: "of the National Bank of Egypt",
      image: "/board-of-trustees/hisham.webp",
      country: "Egypt",
    },
    {
      name: "Sheikh Mohammad Bin Faisal Al Thani",
      role: "Vice Chairman",
      roleCont: "of Al Fisal Holding",
      image: "/board-of-trustees/Sheikh-Mohammad.webp",
      country: "Qatar",
    },
    {
      name: "Sheikh Mohammed Jarrah Al-Sabah",
      role: "Chairman of the Kuwait International Bank",
      roleCont: "Chairman of the Union of Arab Banks",
      image: "/board-of-trustees/mohammed-jarrah.webp",
      country: "Kuwait",
    },
    {
      name: "H.E Dr. Marwan Awad",
      role: "Chairman – Gate to Pay Managing Director – First International",
      roleCont: "for Consultancy and Arbitration",
      image: "/board-of-trustees/marwan.webp",
      country: "Jordan",
    },
    {
      name: "Dr. Abu Bakr Al-Waddan",
      role: "General Manager",
      roleCont: "of the Sahara Bank – Libya",
      image: "/board-of-trustees/abubakr.webp",
      country: "Libya",
    },
    {
      name: "Mr. Mohamed Mahmoud Eletreby",
      role: "Chairman of the Banque Misr",
      roleCont: "Chairman of the Egyptian Banks Association",
      image: "/board-of-trustees/eletreby22.webp",
      country: "Vice Chairman of the Union of Arab Banks",
    },
    {
      name: "Mr. Wissam H. Fattouh",
      role: "Secretary General",
      roleCont: "of the Union of Arab Banks",
      image: "/board-of-trustees/UAB-SG-Mr.-Fattouhs-Picture.jpg.webp",
      country: "Lebanon",
    },
    {
      name: "Dr. Mostafa Hodieb",
      role: "President",
      roleCont:
        "of the Arab Academy for Management Banking & Financial Sciences",
      image: "/board-of-trustees/hodieb.webp",
      country: "Egypt",
    },
  ];

  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">Board of Trustees</h1>
        </div>
      </section>
      <section className="container flex flex-wrap content-center items-center justify-center gap-4 py-8">
        {trustees.map((trustee, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="relative h-[14.375rem] w-[22.1875rem] overflow-hidden rounded">
              <Image src={trustee.image} alt={trustee.name} fill />
            </div>
            <p className="font-bold">{trustee.name}</p>
            <p className="font-semibold">{trustee.role}</p>
            <p>{trustee.roleCont}</p>
            <p>{trustee.country}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
