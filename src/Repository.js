import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './App.module.css';
import Spinner from './Spinner';


const Repository = () => {
  // * Create a state variable to hold the data from the API
  const [repositories, setRepositories] = useState([]);
  // * Create a state variable for loading.
  const [loading, setLoading] = useState(true);

  // * Use useEffect to fetch data from github repository api using async/await and IIFE

  useEffect(() => {

    (async () => {
      try {
        const repoUrl = "https://api.github.com/users/thatgirl9";

        const repoEndPoint = `${repoUrl}/repos`;
        const response = await fetch(repoEndPoint);

        const data = await response.json();
        console.log(response);
        console.log(data);
        setRepositories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();

  }, []);



  return (
    <div>

      <h1 className={styles.gitHeader}>My GitHub Repositories</h1>
      {
        loading ?
          <div className={styles.love}>Loading... <Spinner /></div> :
          (
            <div className={styles.repositories}>
              {repositories.map((repo) => (
                <div key={repo.id} className={styles.repo}>

                  <h2 className={styles.h2Repo}>{repo.name}</h2>
                  <Link to={`/repos/${repo.name}`} className={styles.link}>
                    <button className={styles.btn} >See More</button>
                  </Link>
                </div>
              ))}
            </div>
          )
      }

      <p className={styles.love}>Made by me with &#10084;&#65039;</p>
    </div>
  );
}

export default Repository;