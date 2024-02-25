import Admission from "./Admission";
import Hero from "./Hero";

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Admission />
    </main>
  );
};

export default Home;
