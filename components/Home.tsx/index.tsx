import About from "./About";
import Admission from "./Admission";
import Events from "./Events";
import Hero from "./Hero";
import MoreInfo from "./MoreInfo";
import Video from "./Video";

const Home = () => {
  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <Admission />
      <About />
      <MoreInfo />
      <Video />
      <Events />
    </main>
  );
};

export default Home;
