import React from "react";
import "./SecondPage.css";
import NavBar from "../../components/NavSection/NavBar";
import MoreDetailsPage from "../../components/MoreDetailsPage/MoreDetailsPage";
import FilterSection from "../../components/FilterSection/FilterSection";
function SecondPage() {
  return (
    <section className="second-page-wrapper">
      <NavBar />
      <section className="second-page-main-container">
        <FilterSection />
        <MoreDetailsPage />
      </section>
    </section>
  );
}

export default SecondPage;
