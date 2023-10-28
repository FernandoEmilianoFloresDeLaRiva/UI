import React from "react";
import styles from './Index.module.css'
import Header from "../../components/NavHeader/Header";
import Description from "../../components/Description/Description";
import SectionImg from "../../components/SectionImg/SectionImg";
import Preview from "../../components/Preview/Preview";
import FooterIdea from "../../components/FooterIdea/FooterIdea";
function Index() {
  return (
    <div className={styles.app}>
      <Header />
      <SectionImg/>
      <Description />
      <Preview/>
      <FooterIdea/>
    </div>
  );
}

export default Index;
