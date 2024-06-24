"use client";

import classes from "./error.module.css";
import { PurpleText } from "@/components/UI";

const MealsErrorPage = function () {
  return (
    <main className={classes.error}>
      <h2>
        <PurpleText>Got Error</PurpleText>
      </h2>
    </main>
  );
};

export default MealsErrorPage;
