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
    <SquaresContent text={props.text} title={props.title}/>
  )
}

export default SquareHr
export {SquareVr}