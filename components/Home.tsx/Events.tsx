import Link from "next/link";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Events = () => {
  const events = [
    {
      date: "4 AUGUST، 2021",
      title:
        "“Training and Measuring its Impact on the Development of Organizations” ( A Workshop)",
      link: "/training-and-measuring-its-impact-on-the-development-of-organizations",
    },
    {
      date: "4 AUGUST، 2021",
      title:
        "“Training and Measuring its Impact on the Development of Organizations” ( A Workshop)",
      link: "/training-and-measuring-its-impact-on-the-development-of-organizations",
    },
    {
      date: "4 AUGUST، 2021",
      title:
        "“Training and Measuring its Impact on the Development of Organizations” ( A Workshop)",
      link: "/training-and-measuring-its-impact-on-the-development-of-organizations",
    },
    {
      date: "4 AUGUST، 2021",
      title:
        "“Training and Measuring its Impact on the Development of Organizations” ( A Workshop)",
      link: "/training-and-measuring-its-impact-on-the-development-of-organizations",
    },
    {
      date: "4 AUGUST، 2021",
      title:
        "“Training and Measuring its Impact on the Development of Organizations” ( A Workshop)",
      link: "/training-and-measuring-its-impact-on-the-development-of-organizations",
    },
    {
      date: "4 AUGUST، 2021",
      title:
        "“Training and Measuring its Impact on the Development of Organizations” ( A Workshop)",
      link: "/training-and-measuring-its-impact-on-the-development-of-organizations",
    },
  ];

  return (
    <section className="container mb-8 text-center">
      <h2 className="text-[2rem] font-bold text-primary">Events</h2>
      <Carousel>
        <CarouselContent>
          {events.map((event, index) => (
            <CarouselItem
              className="flex h-[15rem] items-center sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              key={index}
            >
              <Link href={event.link}>
                <Card className="rounded shadow transition-all hover:-translate-y-1 hover:shadow-xl">
                  <CardTitle className="pt-2 text-[0.875rem] text-secondary">
                    {event.date}
                  </CardTitle>
                  <CardContent className="p-4">
                    <p className="text-[1.25rem] font-semibold">
                      {event.title}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!-left-[1rem] size-10 md:!-left-[5rem]" />
        <CarouselNext className="!-right-[1rem] size-10 md:!-right-[5rem]" />
      </Carousel>
    </section>
  );
};

export default Events;
