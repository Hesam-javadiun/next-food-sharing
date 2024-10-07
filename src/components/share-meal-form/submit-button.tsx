"use client";
import classes from "./submit-button.module.css";
import { useFormStatus } from "react-dom";

const SubmitButton = function () {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" className={classes.submitButton} disabled={pending}>
      {pending ? `submitting...` : `Share Meal`}
    </button>
  );
};

export default SubmitButton;
