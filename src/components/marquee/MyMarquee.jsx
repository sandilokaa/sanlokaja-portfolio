import React from "react";
import Marquee from "react-fast-marquee";

import MarqueeTechStack from "../../components/marquee/MarqueeTechStack";

import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

const MyMarquee = () => {

    return (

        <div className="my-tech-stack">
            <Marquee
                className="custom-marquee"
                speed={50}
                style={{ backgroundColor: '#101010' }}

            >
                <MarqueeTechStack myTechStack="JAVASCRIPT" />
                <MarqueeTechStack myTechStack="GOLANG" />
                <MarqueeTechStack myTechStack="NODEJS" />
                <MarqueeTechStack myTechStack="REACTJS" />
                <MarqueeTechStack myTechStack="GORM" />
                <MarqueeTechStack myTechStack="SEQUELIZE" />
                <MarqueeTechStack myTechStack="POSTMAN" />
                <MarqueeTechStack myTechStack="JEST" />
                <MarqueeTechStack myTechStack="NEXTJS" />
                <MarqueeTechStack myTechStack="TAILWIND" />
                <MarqueeTechStack myTechStack="PRISMA" />
                <MarqueeTechStack myTechStack="TYPESCRIPT" />
            </Marquee>
        </div>

    );

};

export default MyMarquee;