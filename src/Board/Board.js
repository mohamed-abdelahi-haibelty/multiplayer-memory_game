import { useEffect, useState } from "react";
import "./Board.css"
import "../Header/Header"
import Header from "../Header/Header"
import Grid from "../Grid/Grid"
import Footer from "../Footer/Footer"

const cards_content = Array(8).fill().map((_, i) => ({content: i, visible: false, matched: false}));


function Board() {

  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [choice_one, setChoiceOne] = useState(null)
  const [choice_two, setChoiceTwo] = useState(null)


  function shuflleCards(data){
    let shuffled = [...data, ...data];
    let i = shuffled.length - 1;
    
    while(i > 0){
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      i--;
    }
    shuffled = shuffled.map(card => ({...card, id: Math.random()}))
    
    setCards(shuffled)
    setMoves(0)
  }


  const handelShowCard = (i) => {
    let new_cards = [...cards]
    new_cards[i].visible = true;
    setCards(new_cards)
    choice_one ? setChoiceTwo(new_cards[i]) : setChoiceOne(new_cards[i]);
  }


  const reset_turn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setMoves(prevMoves => prevMoves + 1)
 }


  useEffect(()=>{
    shuflleCards(cards_content)
  }, [])


  useEffect(()=>{

    if( choice_one && choice_two){
      if(choice_one.content === choice_two.content){


        setCards(prevCards => prevCards.map(card => {
          if(card.content === choice_one.content){
            return {...card, matched : true, active: true}
          }
          return {...card, active: false}
        }))


        setCards(prevCards => prevCards.map(card => {
          if(card.matched && !card.active){
            return ({...card, style: 'button-gray'})
          }
          else if(card.matched && card.active){
            return ({...card, style: 'button-orange'})
          }else{
            return card
          }
        }))


      }
      else{
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card => {
            if(card.content === choice_one.content || card.content === choice_two.content){
               card.visible = false
            }
            return card
          }))
        },500)
      }

      
      reset_turn()
    }
  }, [choice_one, choice_two])


  return (
    <div className="board-container">
        <Header></Header>
        <Grid cards={cards} handelShowCard={handelShowCard}></Grid>
        <Footer moves={moves}/>
    </div>
  )
}

export default Board

