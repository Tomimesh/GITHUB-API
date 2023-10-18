import styles from './App.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.repoMain}>
      <h1>404 Error Page</h1>
      <p>The requested page does not exist.</p>
      <p><i>Not Found</i></p>
    </div>);
}

export default ErrorPage;