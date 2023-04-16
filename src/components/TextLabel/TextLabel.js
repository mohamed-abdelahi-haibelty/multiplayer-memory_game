import "./TextLabel.css"

function TextLabel(props) {
  return (
    <p className="text-lable">{props.children}</p>
  )
}

export default TextLabel