import * as Icon from 'react-feather'
import { NavLink } from 'react-router-dom'
import styles from './App.module.css';

const Nav = () => {
  return (
    <div className={styles.navDiv}>
      <NavLink to="/" className={styles.link404}
      >
        Home</NavLink>
      <NavLink to='/fake' className={styles.link404} activeStyle={{ textDecoration: 'underline' }}>404 Page</NavLink>
      <NavLink to="/errorbound" className={styles.link404} activeStyle={{ textDecoration: 'underline' }}>Error Boundary</NavLink>
      <a href="https://github.com/Thatgirl9?tab=repositories">
        <Icon.GitHub className={styles.icon} />
      </a>
    </div >);
}

export default Nav;