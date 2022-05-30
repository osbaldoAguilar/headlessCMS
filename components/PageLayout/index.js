import Navbar from "../Nav"
import TitleComp from "./Title"
import styles from "../../styles/Home.module.css"
import Footer from "./Footer"
import StyleGridContainer from "../StyledComponents/Grid.Style"
import StyledPage from "../StyledComponents/Page.Style"
import { StyledContainer } from "../StyledComponents/WrappingComponents"


function index({children}) {
  return (
    <div>

        <Navbar/>
      <StyleGridContainer>
        <div>
          <StyledPage >
            <StyledContainer>

          <div id="wpcontent" className={styles.wpChildren}>
            {children}
          </div>
            </StyledContainer>
          </StyledPage>
        <Footer/>
        </div>
      </StyleGridContainer>
    </div>
  )
}

export default index