import Navbar from "../Nav"
import TitleComp from "./Title"
import styles from "../../styles/Home.module.css"
import Footer from "./Footer"


function index({children}) {
  return (
      <div>
        <Navbar/>
        <div className={styles.wpChildren}>
          {children}

        </div>
      <Footer/>
      </div>
  )
}

export default index