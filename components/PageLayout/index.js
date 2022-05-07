import Navbar from "../Nav"
import TitleComp from "./Title"
import styles from "../../styles/Home.module.css"

function index({children}) {
  return (
      <div>
        <Navbar/>
        <div className={styles.wpChildren}>
          {children}

        </div>
      </div>
  )
}

export default index