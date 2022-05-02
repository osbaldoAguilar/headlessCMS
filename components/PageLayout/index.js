import Navbar from "../Nav"
import TitleComp from "./Title"

function index({children}) {
  return (
      <div>
        <TitleComp>
          <p>Hi</p>
        </TitleComp>
        <Navbar/>
        {children}
      </div>
  )
}

export default index