import "./Footer.css"
import SquareHr, { SquareVr } from "../../components/Squares/Squares"
import { useState, useEffect, useContext } from "react"
import GameOver from "../../components/GameOver/GameOver";
import { gameContext } from "../../App";

function Footer(prop) {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);

  const is_multiplayer = prop.is_multiplayer
  const {game_param} = useContext(gameContext)

  let solo = game_param.plyrs_nums === 1 ? true : false
  let game_over_title
  let game_over_description

  let winners
  const pairs = game_param.grid === "4x4" ? 8 : 18
  let game_over = false

  const checkWinner = (players) => {
      const playersCopy = [...players]
      const sortedPlayers = playersCopy.sort((a, b) => b.result - a.result)
      const highestResultPlayer = sortedPlayers[0]
      const winners = sortedPlayers.filter(player => player.result === highestResultPlayer.result)
      return winners
  }


  useEffect(() => {
    let id;
    if (solo) {
      id = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000);
      setTimerId(id);
    }
  
    return () => clearInterval(id);
  }, [solo]);


  const formatedTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`

  }

  const handelStopTimer = (timerId) => {
    clearInterval(timerId)
  }

  if (prop.is_end_game === pairs || time === 120){

    if (solo) {
      handelStopTimer(timerId)
      game_over_title = time < 120 ? "You did it " : "You lose"
      game_over_description = time < 120 ? "Game over! Here is how you got on..." : "Game over! Time's Up..."
    }
    else{
      winners = checkWinner(is_multiplayer)
      game_over_title = winners.length > 1 ? "It's a tie !" : `Player ${winners[0].id} Wins !`
      console.log(winners)
      game_over_description = "Game over! Here are the result..."
    }
    game_over = true
  }

  let timer = solo ? formatedTime(time) : ""

  return (
    <>
      {game_over ? <GameOver time={timer} title={game_over_title} state={game_over_description}
       moves={solo ? prop.moves : ""} players={is_multiplayer} heighstResult={solo ? "" : winners[0].result} /> : ""}

      <div className="footer">
        {is_multiplayer.length <= 0 ? (
          <>
            <SquareHr text={timer} title={"Time"} />
            <SquareHr text={prop.moves} title={"Moves"} />
          </>
        ) : (
              <>
                {is_multiplayer.map((p, i) => <SquareVr class_selector={p.turn? 'active': ""} player={p.player} result={p.result} id={p.id} key={i} />)}
              </>
        )}
      </div>
    </>
  )
}

export default Footer