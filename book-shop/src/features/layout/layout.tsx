import { Outlet } from "react-router-dom"
import Header from "../header/header"
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
