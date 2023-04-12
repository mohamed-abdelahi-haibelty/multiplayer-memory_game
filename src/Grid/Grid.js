import MainButton from "../Buttons/Buttons"
import "./Grid.css"

function Grid() {
  const rounded_btns = [];
  for (let i = 0; i < 16; i++) {
    rounded_btns.push(<MainButton class_selector={`button-rounded button-dark`} key={i}/>);
  }

  return (
    <div className="grid-4x4">
        {rounded_btns}
    </div>
  )
}

export default Grid