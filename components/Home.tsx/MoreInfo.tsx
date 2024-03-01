import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const MoreInfo = () => {
  return (
    <section className="container flex flex-col items-center leading-7">
      <Tabs
        defaultValue="why-us"
        className="w-[80rem] max-w-full overflow-hidden rounded"
      >
        <TabsList className="flex w-full items-stretch">
          <TabsTrigger value="why-us" className="grow">
            Why Us?
          </TabsTrigger>
          <TabsTrigger value="modernized-techniques" className="grow">
            Modernized
            <br />
            Techniques
          </TabsTrigger>
          <TabsTrigger value="diversity" className="grow">
            Diversity
          </TabsTrigger>
          <TabsTrigger value="alumni" className="grow">
            Alumni
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="why-us"
          className="flex flex-col bg-white md:flex-row"
        >
          <div className="flex flex-col gap-8 p-4 md:flex-row">
            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded md:h-[16rem] md:w-[24rem]">
              <Image src="/home/mission-1.webp" alt="Mission" fill />
            </div>
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-[1.25rem] font-bold text-primary">
                Why Choose Us?
              </h2>
              <p>AAMBFS is a member of the following Associations:</p>
              <ul className="list-disc">
                <li className="ml-8 text-black/60">
                  The Association of Arab Universities
                </li>
                <li className="ml-8 text-black/60">
                  The International Association of Universities
                </li>
                <li className="ml-8 text-black/60">
                  The European Banking & Financial Services Training Association
                </li>
                <li className="ml-8 text-black/60">
                  The Federation of Arab Scientific Research Council
                </li>
                <li className="ml-8 text-black/60">
                  The Arab Federation of Technical Education
                </li>
                <li className="ml-8 text-black/60">
                  The Egyptian Fintech Association
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="modernized-techniques"
          className="flex flex-col bg-white md:flex-row"
        >
          <div className="flex flex-col gap-8 p-4 md:flex-row">
            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded md:h-[16rem] md:w-[24rem]">
              <Image
                src="/home/scholarships-title-bg.webp"
                alt="Mission"
                fill
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.25rem] font-bold text-primary">
                Modernized Educational Techniques
              </h2>
              <p>
                The AAMBFS strives to offer its students the perfect environment
                to grow their thoughts perfect introduce an entire generation of
                change makers to the community. The Academy provides its
                students with the most advanced techniques in its learning
                methods, our students undergo their life-changing academic
                experience through a deep “Case and Experience” methodology, in
                which students build a solid theoretical foundation at the same
                time acquiring indispensable leadership skills.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="diversity"
          className="flex flex-col bg-white md:flex-row"
        >
          <div className="flex flex-col gap-8 p-4 md:flex-row">
            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded md:h-[16rem] md:w-[24rem]">
              <Image src="/home/diversity.webp" alt="Mission" fill />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.25rem] font-bold text-primary">
                Diversity and Networking Possibilities
              </h2>
              <p>
                Born to the diverse community of the Arab world, the AAMBFS
                believes that diversity is key for an enriching learning
                experience. We aim to help our students grow their capabilities
                and realize their true potentials through encouraging them to
                share their voices, and network their ideas and viewpoints, thus
                bringing out the change maker in them.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent
          value="alumni"
          className="flex flex-col bg-white md:flex-row"
        >
          <div className="flex flex-col gap-8 p-4 md:flex-row">
            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded md:h-[16rem] md:w-[24rem]">
              <Image src="/home/alumni.webp" alt="Mission" fill />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[1.25rem] font-bold text-primary">Alumni</h2>
              <p>
                AAMBFS is a best-in-class Academic Institution that gives you
                plenty of opportunities to sharpen your skills and mind. The
                all-time support and motivation of the faculty members of AAMBFS
                has enlightened many throughout the journey.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default MoreInfo;
