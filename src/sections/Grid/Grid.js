import MainButton from "../../components/Buttons/Buttons"
import "./Grid.css"

function Grid(props) {

  const rounded_btns = props.cards.map((card, i) => <MainButton onClick={ () => !card.matched &&
  props.handelShowCard(i)} text={card.visible ? props.is_icon? <card.content/>: card.content: ""} 
  class_selector={`button-rounded  ${card.matched ? card.style : "button-dark"}`}
  key={card.id}/>);


  return (
    <div className={props.grid_size}>
        {rounded_btns}
    </div>
  )
}

export default Grid