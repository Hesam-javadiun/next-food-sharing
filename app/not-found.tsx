import classes from "./not-found.module.css";
import { PurpleText } from "@/components/UI";

const NotFound = function () {
  return (
    <main className={classes.notFound}>
      <h2>
        <PurpleText>Error</PurpleText>
      </h2>
      <p>the requested URL does not exist</p>
    </main>
  );
};

export default NotFound;
