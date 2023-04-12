import "./SquaresContent.css"

function SquaresContent(props) {
  return (
    <>
          <span className="sq-title">{props.title}</span>
          <h4 className="sq-text">{props.text}</h4>
    </>
  )
}

export default SquaresContent