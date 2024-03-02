import classes from "./meal-card.module.css";
import { Link } from "@/components/UI";
import type { MealData } from "@/lib/data-base";
import Image from "next/image";

type MealCardProps = Pick<
  MealData,
  "title" | "creator" | "summary" | "image" | "slug"
>;

const MealCard = function ({
  title,
  creator,
  summary,
  image,
  slug,
}: MealCardProps) {
  return (
    <article className={classes.card}>
      <div className={classes.imageContainer}>
        <Image src={image} alt={`${title} image`} fill></Image>
      </div>
      <h3>{title}</h3>
      <p>
        <small>{creator}</small>
      </p>
      <p className={classes.summary}>{summary}</p>
      <Link isBackgroundColorFilled href={`meals/${slug}`}>
        View Details
      </Link>
    </article>
  );
};

export default MealCard;
