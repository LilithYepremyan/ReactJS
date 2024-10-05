import { useNavigate } from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li onClick={() => navigate("/books")}>Books</li>
          <li onClick={() => navigate("/addBook")}>Add Book</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
