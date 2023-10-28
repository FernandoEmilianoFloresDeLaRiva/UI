import React, { Suspense, useState } from "react";
import styles from "./Index.module.css";
import Header from "../../components/NavHeader/Header";
import IndexCatalogo from "../IndexCatalogo/IndexCatalogo";
import Home from "../Home/Home";
import IndexCalendar from "../IndexCalendar/IndexCalendar";
function Index() {
  const [actualComponent, setActualComponent] = useState(2);
  const navTexts = [
    {
      text: "Servicio a clientes",
      component: null,
    },
    {
      text: "Catalogo",
      component: <IndexCatalogo />,
    },
    {
      text: "Shinycrochet",
      component: <Home />,
    },
    {
      text: "Calendario",
      component: <IndexCalendar/>,
    },
    {
      text: "INFORMACION DE ENTREGA",
      component: null,
    },
  ];
  return (
    <div className={styles.app}>
      <Header texts={navTexts} setActual={setActualComponent} />
      <Suspense fallback={"Loading..."}>
        {navTexts[actualComponent].component}
      </Suspense>
    </div>
  );
}

export default Index;
