import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

const RepoDetail = () => {
  // * Create a variable for the repository selected
  const [repo, setRepo] = useState(null);
  // * Create a variable for the repository id using useParams
  const { repoName } = useParams();

  // * Use useEffect to fetch data from selected github repository api using async/await and IIFE

  useEffect(() => {
    (async () => {
      try {
        // https://api.github.com/repos/:owner/:repo
        // https://api.github.com/repos/thatgirl9/${repoName}
        const repoUrl = "https://api.github.com/repos/thatgirl9";
        const repoEndPoint = `${repoUrl}/${repoName}`;

        const response = await fetch(repoEndPoint);
        const data = await response.json();
        console.log(data);
        setRepo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }



  return (
    <div className={styles.repoMain}>
      <h1 className={styles.h1Repo}>My Github Repository</h1>
      <div className={styles.repoDiv}>
        <div>
          <p><i className={styles.repoItalics}>Name:</i></p>
          <h2>{repo.name}</h2>
        </div>
        <div>
          <p><i className={styles.repoItalics}>Description:</i></p>
          <p>{repo.description}</p>
        </div>

        <div>
          <p><i className={styles.repoItalics}>Language:</i></p>
          <p>{repo.language}</p>
        </div>
        <div className={styles.reposBtnDiv}>

          <a href={repo.html_url}>
            <button className={styles.reposBtn}>View on GitHub</button>
          </a>
          <Link to='/'>
            <button className={styles.reposBtn}>Go back</button>
          </Link>

        </div>

      </div>


      <p className={styles.love}>Made by me with &#10084;&#65039;</p>
    </div>
  );
}

export default RepoDetail;