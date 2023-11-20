import React from "react";
import styles from "./Home.module.css";
import Description from "../../components/Description/Description";
import { SectionImgLazy } from "../../components/SectionImg/SectionImg";
import { PreviewLazy } from "../../components/Preview/Preview";
import FooterIdea from "../../components/FooterIdea/FooterIdea";
import { useProductos } from "../../hooks/useProductos";
import { Suspense } from "react";

function Home() {
  const { isLoading, productos } = useProductos();

  return (
    <div className={styles.app}>
      <main>
        {!isLoading && (
          <Suspense fallback={"loading..."}>
            <SectionImgLazy productos={productos} />
          </Suspense>
        )}
        <Description />
        {!isLoading && (
          <Suspense fallback={"loading..."}>
            <PreviewLazy productos={productos} />
          </Suspense>
        )}
      </main>
      <FooterIdea />
    </div>
  );
}

export default Home;
