import "./Squares.css"
import SquaresContent from "../SquaresContent/SquaresContent"

function SquareHr(props) {
  return (
    <div className="squares-hr">
            <SquaresContent text={props.text} title={props.title}/>
    </div>
  )
}

function SquareVr(props) {
  return (
    <div className={`squares-vr ${props.class_selector}`}>
      <SquaresContent text={props.result} title={props.player}/>
    </div>
  )
}

export default SquareHr
export {SquareVr}