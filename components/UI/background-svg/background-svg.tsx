import classes from "./background-svg.module.css";

const BackgroundSvg = function () {
  return (
    <div className={classes.svgContainer}>
      <svg className={classes.svg} viewBox="0 0 35 20">
        <path
          fill="#5d4b81"
          d="M 0 0 S 23.3333 0 35 0 L 35 4 Q 26 1 15 5 Q 4 9 9 6 Q 16 2 0 3"
        ></path>
      </svg>
    </div>
  );
};

export default BackgroundSvg;
