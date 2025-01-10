import { Link, Outlet } from "react-router-dom"
import styles from "./Header.module.css"
const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <nav>
          <Link to="/">Books</Link>
          <Link to="/authors">Authors</Link>
          <Link to="/add-book">Add Book</Link>
        </nav>
      </div>
    </>
  )
}

export default Header
