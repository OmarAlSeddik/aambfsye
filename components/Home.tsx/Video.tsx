import { Play } from "lucide-react";

const Video = () => {
  return (
    <section className="h-[32rem] bg-[url('../public/home/slider-hp3.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
      <div className="container flex size-full flex-col items-center justify-center gap-4 py-4 text-center">
        <a
          href="https://youtu.be/GvUPyeOgo-8?si=HUowdqcJjiq3nGga"
          target="_blank"
          aria-label="Introductory Video"
          rel="noopener noreferrer"
        >
          <Play strokeWidth={3} className="size-[6rem]" />
        </a>
        <h2 className="text-[1.5rem] font-bold md:text-[2rem]">
          Unleash Your Scientific and Practical Skills
        </h2>
        <div>
          <p className="text-[1.125rem] md:text-[1.25rem]">
            AMMBS is preparing students to make meaningful contributions to
            society
          </p>
          <p className="text-[1.125rem] md:text-[1.25rem]">
            as engaged citizens and leaders in a complex world
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;
