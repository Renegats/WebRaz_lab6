import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import EarlyAccess from "../components/EarlyAccess";
import EarlyAccessCard from "../components/EarlyAccessCard";
import Examples from "../components/Examples";
import Footer from "../components/Footer";

const Home = ({ isEditable }) => {
  return (
    <>
      <section
        className="section header"
        id="header"
        // contentEditable={isEditable}
      >
        <Header />
      </section>
      <section className="section hero_section" id="hero">
        <Hero />
      </section>
      <section className="section brands_section" id="brands">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section" id="what-is">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here" id="future">
        <FutureHere />
      </section>
      <section className="section early_access_section">
        <EarlyAccess />
      </section>
      <section className="section early_access_card">
        <EarlyAccessCard />
      </section>
      <section className="section section_examples">
        <Examples />
      </section>
      <section className="section fifth_part_page">
        <Footer />
      </section>
    </>
  );
};

export default Home;
