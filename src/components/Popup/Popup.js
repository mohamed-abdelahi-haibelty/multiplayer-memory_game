import "./Popup.css"

function Popup(props) {
  return (
    <div className="popup">{props.children}</div>
  )
}

export default Popup