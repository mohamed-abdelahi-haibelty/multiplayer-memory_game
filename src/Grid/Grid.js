import MainButton from "../Buttons/Buttons"
import "./Grid.css"

function Grid(props) {

  const rounded_btns = props.cards.map((card, i) => <MainButton  onClick={() => 
  props.handelShowCard(i)} text={card.visible ? card.content: ""} 
  class_selector={`button-rounded  ${card.matched ? card.style : "button-dark"}`}
  key={card.id}/>);


  return (
    <div className="grid-4x4">
        {rounded_btns}
    </div>
  )
}

export default Grid