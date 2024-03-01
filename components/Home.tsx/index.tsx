import About from "./About";
import Admission from "./Admission";
import Hero from "./Hero";
import MoreInfo from "./MoreInfo";

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Admission />
      <About />
      <MoreInfo />
    </main>
  );
};

export default Home;
