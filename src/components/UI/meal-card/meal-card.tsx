import { Link, Typography, Button, PurpleText } from "@/src/components/UI";
import type { MealData } from "@/src/lib/data-base";
import Image from "next/image";
// import classes from "./meal-card.module.css";

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
    <article className="custom-box-shadow overflow-hidden rounded flex gap-2 flex-col h-full justify-between custom-text-shadow bg-gradient-to-r from-[rgb(25,0,37)] to-[rgb(40,40,40)]">
      <div className="grow-0 shrink-0 basis-[53%] relative">
        <Image
          src={image}
          alt={`${title} image`}
          fill
          className="object-cover"
        ></Image>
      </div>
      <Typography as="h3" className="text-lg ml-4 ">
        {title}
      </Typography>
      <Typography>
        <small className="text-xs ml-4">{creator}</small>
      </Typography>
      <Typography className="grow-1 shrink-1 basis-[17%] overflow-hidden ml-4 text-sm">
        {summary}
      </Typography>
      <Button href={`meals/${slug}`} className="self-end ">
        <PurpleText isBackgroundColorFilled className="block rounded m-4">
          <Typography className="py-2 px-4">View Details</Typography>
        </PurpleText>
      </Button>
    </article>
  );
};

export default MealCard;

//ToDo
//add tailwind add test
//add test
