import "./Buttons.css"

function MainButton({class_selector, text, onClick}) {
  return (
    <button className={`button ${class_selector}`} onClick={onClick} >{text}</button>
  )
}

export default MainButton