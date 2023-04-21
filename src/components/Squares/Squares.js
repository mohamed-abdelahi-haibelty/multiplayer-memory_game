import "./Squares.css"
import SquaresContent from "../SquaresContent/SquaresContent"
import { useMediaQuery } from 'react-responsive';

function SquareHr(props) {
  return (
    <div className={`squares-hr ${props.class_selector}`}>
            <SquaresContent text={props.text} title={props.title}/>
    </div>
  )
}

function SquareVr(props) {
  const isMobile = useMediaQuery({ maxWidth: 767});
  return (
    <div className={`squares-vr ${props.class_selector}`}>
      <SquaresContent text={props.result} title={isMobile? `P${props.id}`: `Player${props.id}`}/>
    </div>
  )
}

export default SquareHr
export {SquareVr}