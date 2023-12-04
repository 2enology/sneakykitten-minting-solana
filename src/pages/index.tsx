import type { NextPage } from "next";
import Home from "../components/Home";
import InfiniteSlider from "../components/InfiniteSlider";
import About from "../components/About";
import Collection from "../components/Collection";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Follow from "../components/Follow";

const HomePage: NextPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full bg-amber-400">
      <Home />
      <InfiniteSlider />
      <About />
      <Collection />
      <Roadmap />
      <Team />
      <InfiniteSlider />
      <Faq />
      <Follow />
    </main>
  );
};

export default HomePage;
