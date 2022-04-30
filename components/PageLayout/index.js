import TitleComp from "./Title"

function index({children}) {
  return (
      <div>
        <TitleComp/>
        {children}
      </div>
  )
}

export default index