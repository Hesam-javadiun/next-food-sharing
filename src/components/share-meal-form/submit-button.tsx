"use client";
// import classes from "./submit-button.module.css";
import { useFormStatus } from "react-dom";
import { Button } from "@/src/components/UI";

const SubmitButton = function () {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? `submitting...` : `Share Meal`}
    </Button>
  );
};

export default SubmitButton;
