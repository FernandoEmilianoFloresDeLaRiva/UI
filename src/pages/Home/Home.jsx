import React from "react";
import styles from "./Home.module.css";
import Description from "../../components/Description/Description";
import SectionImg from "../../components/SectionImg/SectionImg";
import Preview from "../../components/Preview/Preview";
import FooterIdea from "../../components/FooterIdea/FooterIdea";

function Home() {
  return (
    <div className={styles.app}>
      <main>
        <SectionImg />
        <Description />
        <Preview />
      </main>
      <FooterIdea />
    </div>
  );
}

export default Home;
