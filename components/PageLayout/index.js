import Navbar from "../Nav"
import TitleComp from "./Title"
import styles from "../../styles/Home.module.css"
import Footer from "./Footer"
import StyleGridContainer from "../StyledComponents/Grid.Style"
import StyledPage from "../StyledComponents/Page.Style"
import { StyledContainer } from "../StyledComponents/WrappingComponents"


function index({children}) {
  return (
    <>

        <Navbar/>
      <StyleGridContainer>
        <StyledPage >
          <StyledContainer>

        <div id="wpcontent" className={styles.wpChildren}>
          {children}
        </div>
          </StyledContainer>
        </StyledPage>
      <Footer/>
      </StyleGridContainer>
    </>
  )
}

export default index