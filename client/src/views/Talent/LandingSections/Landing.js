import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import ButtonSection from "./ButtonScroll";
import ImageSection from "./ImageSections";
import Footer from "components/Footers/Footer";

const Landing = () => {
  const [TalentInfo, setTalentInfo] = useState([]);

  useEffect(() => {
    getTalentInfo();
  }, []);

  const getTalentInfo = () => {
    Axios.get("/talent").then((response) => {
      if (response.data) {
        setTalentInfo(response.data);
      } else {
        console.log("Failed to fetch the requested data");
      }
    });
  }; 

  return (
    <>
      <Navbar props={TalentInfo} />
      <ButtonSection />
      <ImageSection props={TalentInfo} />
      <Footer />
    </>
  );
};
export default Landing;
