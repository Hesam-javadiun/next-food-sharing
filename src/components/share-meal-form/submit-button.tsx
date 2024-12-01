"use client";
import { useFormStatus } from "react-dom";
import { Button, PurpleText } from "@/src/components/UI";

const SubmitButton = function () {
  const { pending } = useFormStatus();

  return (
    <PurpleText isBackgroundColorFilled className="rounded">
      <Button type="submit" disabled={pending} className="px-8 py-2 text-zinc-200">
        {pending ? `submitting...` : `Share Meal`}
      </Button>
    </PurpleText>
  );
};

export default SubmitButton;
