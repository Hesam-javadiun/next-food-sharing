import classes from "./background-svg.module.css";

const BackgroundSvg = function () {
  return (
    <svg className={classes.svg} viewBox="0 0 35 20.03">
      <path
        fill="#7d54fa"
        d="M 0 0 S 23.3333 0 35 0 L 35 4 Q 29 5 24 3 Q 18 1 21 4 C 24 7 24 9 22 8 C 20 7 17 5 9 5 C 2 5 2 2 0 4"
      ></path>
    </svg>
  );
};

export default BackgroundSvg;
