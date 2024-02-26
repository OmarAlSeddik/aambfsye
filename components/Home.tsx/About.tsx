import Link from "next/link";

const About = () => {
  return (
    <section className="container flex flex-col items-center gap-8 rounded p-4 text-center">
      <h2 className="text-3xl font-bold text-primary">About the Academy</h2>
      <p>
        The Arab Academy for Management, Banking and Financial Sciences (AAMBFS)
        has been serving as “The Academy of All Arabs”. Through the years, it
        became a hub that inspires all Arab professionals in the finance and
        business sectors, providing them with scientific and academic knowledge.
      </p>
      <p>
        Armed with its robust syllabus that competes with the world’s highest
        ranking standards, the AAMBFS is determined to bring forth a new
        generation that is ready to bring about the change to their communities
        across the Arab world.{" "}
        <Link href="/an-overview-about-the-academy" className="text-secondary">
          Read More
        </Link>
      </p>
    </section>
  );
};

export default About;
