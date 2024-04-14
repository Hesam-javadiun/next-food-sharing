import classes from "./note.module.css";
import { PurpleText } from "../UI";
const noteMessage = "duo to the lack of";

const Note = function () {
  return (
    <div className={classes["note-container"]}>
      <span className={classes.noteText}>
        <PurpleText>
          <strong>Note</strong>
        </PurpleText>{" "}
        duo to the country restriction, cloud object storage services like{" "}
        <strong>
          <abbr>AWS S3</abbr>
        </strong>{" "}
        or <strong>google cloud</strong> and lack of free tier pricing for
        persian cloud services, a dummy image will consider for your food meal.
      </span>
    </div>
  );
};

export default Note;
