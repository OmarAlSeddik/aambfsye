import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  const carouselItems = [
    {
      title: "Complete Solution for Your Education Needs",
      image: "/home/slide-1.webp",
      buttonText: "ABOUT US",
      buttonLink: "/an-overview-about-the-academy",
    },
    {
      title: "Your Future is Coming for You, Get Ready!",
      image: "/home/slide-2.webp",
      buttonText: "OUR PROGRAMS",
      buttonLink: "/admission-and-registration",
    },
  ];

  return (
    <Carousel className="w-full" opts={{ loop: true, active: true }}>
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative flex h-[23rem] items-center justify-center p-0 md:h-[46rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="z-0"
                  objectFit="cover"
                />
                <div className="z-10 flex size-full flex-col items-center justify-center gap-8 text-base font-bold text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)] md:text-[3.3125rem]">
                  <h2>{item.title}</h2>
                  <Button asChild className="px-8 py-4">
                    <Link href={item.buttonLink}>{item.buttonText}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="size-8 animate-bounce-left md:size-12" />
      <CarouselNext className="size-8 animate-bounce-right md:size-12" />
    </Carousel>
  );
};

export default Hero;
