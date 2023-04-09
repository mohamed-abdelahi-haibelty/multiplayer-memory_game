import "./Buttons.css"

function MainButton({class_selector, text}) {
  return (
    <button className={`button ${class_selector}`}>{text}</button>
  )
}

export default MainButton