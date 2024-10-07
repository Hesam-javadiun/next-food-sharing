import { useFormStatus } from "react-dom";
import classes from "./submit-button.module.css";
import Link from "next/link";
type SubmitButtonAndNavigationLinkProps = {
  buttonText: string;
  href: string;
  linkText: string;
};

export default function SubmitButtonAndNavigationLink({
  buttonText,
  href,
  linkText,
}: SubmitButtonAndNavigationLinkProps) {
  const { pending } = useFormStatus();
  return (
    <>
      <button
        type="submit"
        disabled={pending}
        className={pending ? classes.pending : ""}
      >
        {pending ? "Submitting" : buttonText}
      </button>
      <Link href={href} className={pending ? classes.pending : ""}>
        {linkText}
      </Link>
    </>
  );
}
