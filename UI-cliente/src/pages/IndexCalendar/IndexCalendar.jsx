import React from "react";
import styles from "./IndexCalendar.module.css";
import CalendarView from "../../components/Calendar/Calendar";
function IndexCalendar() {
  return (
    <div className={styles.app}>
      <main>
        <CalendarView/>
      </main>
    </div>
  );
}

export default IndexCalendar;
