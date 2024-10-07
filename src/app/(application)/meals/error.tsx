"use client";

import { PurpleText } from "@/src/components/UI";
import classes from "./error.module.css";

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
