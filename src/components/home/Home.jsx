import React from 'react';
import HeroCarousel from "../hero/heroCarousel";
import OverviewCounter from "../overview-counter/OverviewCounter";
import BannerDetails from "../bannerDetails/BannerDetails";
import ValueCard from '../valueCard/ValueCard';
import News from "../news/News";
import Space from '../space/Space';
import NewsSlider from "../stations/NewsSlider";
import Footer from "../footer/Footer";
import "aos/dist/aos.css";


const Home = () => {
  return (
    <>
      <HeroCarousel />
      <OverviewCounter />
      <NewsSlider />
      <BannerDetails reverse={true} />
      <News />
      <ValueCard />
      <Space />
      <Footer />
    </>
  )
}

export default Home
