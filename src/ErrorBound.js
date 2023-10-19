import { useEffect } from "react";
import styles from "./App.module.css";
import { Link } from "react-router-dom";


const ErrorBound = () => {
  // * Use useEffect to add error boundary

  useEffect(() => {
    throw new Error("This is an error");


  }, []);

  // * Using a function to trigger it
  const triggerError = () => {
    throw new Error("This is an error");

  }

  return (
    <div>
      <h2 >Error Boundary Testing</h2>
      <button className={styles.btn} onClick={triggerError}>Test</button>
      <div className={styles.errorBoundary}>
        <h2>Ooops!</h2>
        <p>Error Occurred</p>
        <p><i className={styles.repoItalics}>From Error Boundary</i></p>
        <a href='/'>Go back to Home Page</a>
      </div>
    </div>
  )
};

export default ErrorBound;