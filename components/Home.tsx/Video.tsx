const Video = () => {
  return (
    <section className="h-[32rem] bg-[url('../public/home/slider-hp3.webp')] bg-cover bg-center text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
      <div className="container flex size-full flex-col items-center justify-between py-4">
        <div className="aspect-video w-full overflow-auto rounded md:w-1/2">
          <iframe
            className="size-full"
            src="https://www.youtube.com/embed/GvUPyeOgo-8?si=Dcs31ZO-I16cPwHX"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col gap-4 text-center">
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
      </div>
    </section>
  );
};

export default Video;
