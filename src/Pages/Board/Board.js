import { useEffect, useRef, useState } from "react";
import "./Board.css"
import Header from "../../sections/Header/Header"
import Grid from "../../sections/Grid/Grid"
import Footer from "../../sections/Footer/Footer"

const cards_content = Array(8).fill().map((_, i) => ({content: i, visible: false, matched: false}));


function Board() {

  const is_end_game = useRef(0);
  // const [end_game, setEndGame] = useState(false)

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


        is_end_game.current += 1;
      }
      else{
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card => {
            if(card.content === choice_one.content || card.content === choice_two.content){
              return {...card, visible: false}
            }
            return card
          }))
        },500)
      }

      reset_turn()
    }
  }, [choice_one, choice_two])


  // if (is_end_game.current === 8){
  //   console.log("end_game")
  //   setEndGame(true)
  // }


  return (
    <div className="board-container">
        <Header></Header>
        <Grid cards={cards} handelShowCard={handelShowCard} is_end_game={is_end_game.current}></Grid>
        <Footer moves={moves} is_end_game={is_end_game.current}/>
    </div>
  )
}

export default Board

