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
      image: "/homepage/slide-1.webp",
      buttonText: "ABOUT US",
      buttonLink: "/en/about-us",
    },
    {
      title: "Your Future is Coming for You, Get Ready!",
      image: "/homepage/slide-2.webp",
      buttonText: "OUR PROGRAMS",
      buttonLink: "/en/admission-and-registration",
    },
  ];

  return (
    <Carousel className="w-full" opts={{ loop: true, active: true }}>
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative flex h-[46rem] items-center justify-center p-0">
                <Image src={item.image} alt={item.title} fill className="z-0" />
                <div className="z-10 flex size-full flex-col items-center justify-center gap-8 text-[3.3125rem] font-bold text-white shadow-[inset_0_9999px_rgba(0,0,0,0.5)]">
                  <h2>{item.title}</h2>
                  <Button
                    asChild
                    variant={"secondary"}
                    className="rounded-full px-8 py-4"
                  >
                    <Link href={item.buttonLink}>{item.buttonText}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hero;
