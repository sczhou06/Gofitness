import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import TopMenuBar from "../components/TopMenuBar"
import HomeSlider from "../components/HomeSlider"

const Home = () => {
  return (
      <div>
        <TopMenuBar />
        <HomeSlider />
      </div>
  );
};

export default Home;
