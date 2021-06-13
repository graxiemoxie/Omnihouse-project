import React from "react";
import "./Home.css";
import NavBar from "../../components/NavSection/NavBar";
import FilterSection from "../../components/FilterSection/FilterSection";
import MainArea from "../../components/MainArea/MainArea";

function Home() {
  return (
    <div className="page-wrapper">
      <NavBar />
      <div className="main-container">
        <FilterSection />
        <MainArea />
      </div>
    </div>
  );
}

export default Home;
