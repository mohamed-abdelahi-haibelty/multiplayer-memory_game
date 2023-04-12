import "./Footer.css"
import SquareHr from "../Squares/Squares"

function Footer() {
  return (
    <div className="footer">
        <SquareHr text={"1:53"} title={"Time"}/>
        <SquareHr text={"39"} title={"Moves"}/>
    </div>
  )
}

export default Footer