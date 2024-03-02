import classes from './loading-meals.module.css';

const LoadingMeals = function () {
  return (
    <main className={classes.loading}>
      <p>Fetching meals ...</p>
    </main>
  );
};

export default LoadingMeals;
