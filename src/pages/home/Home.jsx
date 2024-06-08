import React from "react";

import HomeLayout from "../../layouts/home/HomeLayout";
import MainContent from "../../components/main/MainContent";
import BestProject from "../../components/portfolio/BestProject";
import JumbotronPortfolio from "../../components/jumbotron/JumbotronPortfolio";
import MyService from "../../components/service/MyService";
import MyMarquee from "../../components/marquee/MyMarquee";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const Home = () => {

    return (

        <HomeLayout>

            <div id="header-my-portfolio">
                <MainContent/>
            </div>

            <div id="marquee-tech-stack">
                <MyMarquee/>
            </div>

            <div id="my-service">
                <MyService/>
            </div>

            <div id="jumbotron-portfolio">
                <JumbotronPortfolio/>
            </div>

            <div id="best-project-content">
                <BestProject/>
            </div>

        </HomeLayout>

    );
};

export default Home;