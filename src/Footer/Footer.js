import "./Footer.css"
import SquareHr from "../Squares/Squares"

function Footer(prop) {
  return (
    <div className="footer">
        <SquareHr text={"1:53"} title={"Time"}/>
        <SquareHr text={prop.moves} title={"Moves"}/>
    </div>
  )
}

export default Footer