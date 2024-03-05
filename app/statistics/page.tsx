import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AAMBFSYE - Statistics",
  description: "Statistics",
};

export default function OverviewPage() {
  const data = [
    { provider: "Ministry of Oil and Mineral Resources", students: 200 },
  ];

  return (
    <main>
      <section className="h-[12rem] bg-[url('../public/other/education-parallax.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
        <div className="container flex h-full items-end p-8">
          <h1 className="text-[2rem] font-bold">Statistics</h1>
        </div>
      </section>
      <section className="container flex flex-col gap-4 py-8">
        <p>
          Since its branch inauguration in Yemen in 2006, the Academy has
          contributed to empowering workers in management, financial, and
          banking sectors and qualifying personnel from various governmental and
          private institutions. The following is a statistic for the number of
          candidates sent by different entities to study at the Academy.
        </p>
        <Table className="bg-black/25">
          <TableCaption>Number of students per scholarship.</TableCaption>
          <TableHeader className="bg-black/50">
            <TableRow>
              <TableHead>Scholarship Provider</TableHead>
              <TableHead>Number of Scholarship Students</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.provider}</TableCell>
                <TableCell>{item.students}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
