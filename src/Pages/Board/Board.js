import { useEffect, useRef, useState } from "react";
import "./Board.css"
import Header from "../../sections/Header/Header"
import Grid from "../../sections/Grid/Grid"
import Footer from "../../sections/Footer/Footer"
import { useContext } from 'react'
import { gameContext } from '../../App'

import { FaEarlybirds, FaGithubAlt, FaJenkins, FaKeybase, FaLinux, FaQq, FaGhost, FaBomb, 
  FaCarAlt, FaCat, FaDizzy, FaDog, FaFemale, FaKaaba, FaGrinWink, FaHandSpock, FaMeteor,
   FaSadCry} from "react-icons/fa";

const cards_content = Array(8).fill().map((_, i) => ({content: i, visible: false, matched: false}));
const icons_4x4 = '';
const icons_6x6 = '';
const nums_4x4 = Array(8).fill().map((_, i) => ({content: i, visible: false, matched: false}));
const nums_6x6 = Array(18).fill().map((_, i) => ({content: i, visible: false, matched: false}));


function Board() {

  const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [choice_one, setChoiceOne] = useState(null)
  const [choice_two, setChoiceTwo] = useState(null)
  const {game_param} = useContext(gameContext)
  const is_end_game = useRef(0);
  // const [end_game, setEndGame] = useState(false)


  ////////////////////////////////// shuflle cards/////////////////////////
  function shuflleCards(data){

    ///////////////get all cards as data param then duplicate them/////////////
    let shuffled = [...data, ...data];

    //////////////////////////////shuffel cards/////////////////////////////
    let i = shuffled.length - 1;
    while(i > 0){
      let j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      i--;
    }

    /////////////////// add a reandom id to each card///////////////////
    shuffled = shuffled.map(card => ({...card, id: Math.random()}))
    
    //////////////// add the shuffeld cards to the cards_content variable///////////
    setCards(shuffled)

    setMoves(0)

  }


  ///////// set the visible property to true when the card is clicked //////
  const handelShowCard = (i) => {
    let new_cards = [...cards]
    new_cards[i].visible = true;
    setCards(new_cards)
    choice_one ? setChoiceTwo(new_cards[i]) : setChoiceOne(new_cards[i]);
  }

  
  ///////////reset turn when the player complete a move /////////
  const reset_turn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setMoves(prevMoves => prevMoves + 1)
 }


 ///////////////////// shuffle cards when the page load //////////////////
  useEffect(()=>{
    shuflleCards(game_param.grid === '4x4'? nums_4x4: nums_6x6);
  }, [])


  useEffect(()=>{

    if( choice_one && choice_two){
      if(choice_one.content === choice_two.content){

        //if two cards match set the matched and active proprties of those cards to true//
        setCards(prevCards => prevCards.map(card => {
          if(card.content === choice_one.content){
            return {...card, matched : true, active: true}
          }
          return {...card, active: false}
        }))


        //change the bgcolor of matched cards to orange //
        setCards(prevCards => prevCards.map(card => {
          if(card.matched && !card.active){
            return ({...card, style: 'button-gray'})
          }
          //change the bgcolor of the previous matched cards to gray //
          else if(card.matched && card.active){
            return ({...card, style: 'button-orange'})
          }else{
            return card
          }
        }))


        is_end_game.current += 1;
      }
      else{

        /// hide cards if they don't match///////
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
        <Grid  grid_size={`grid-${game_param.grid}`} cards={cards} handelShowCard={handelShowCard} is_end_game={is_end_game.current}></Grid>
        <Footer moves={moves} is_end_game={is_end_game.current}/>
    </div>
  )
}

export default Board

