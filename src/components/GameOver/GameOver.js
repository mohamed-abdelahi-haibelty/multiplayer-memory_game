import "./GameOver.css"
import "../Popup/Popup"
import Popup from "../Popup/Popup"
import SquareHr from "../Squares/Squares"
import MainButton from "../Buttons/Buttons"

function GameOver({title, state, time, moves, players, heighstResult}) {
  return (
    <div>
        <div className="overlay"></div>
        <div className="game-over">
          <Popup>
              <div className="game-over-header">
                <h1 className="title">{title}</h1>
                <p className="state">{state}</p>
              </div>
              <div className="solo result">
                {players.length <= 0 ?
                  <>
                    <SquareHr text={time} title={"Time Elapsed"}/>
                    <SquareHr text={moves} title={"Moves taken"}/>
                  </>
                  :
                  <>
                    {players.map((player) => {
                      return <SquareHr key={player.id} title={`Player${player.id}${player.result === heighstResult?"(winner!)":""}`}
                       text={`${player.result} Pairs`} class_selector={player.result === heighstResult ? "winner": ""}/>
                    })}
                  </>
                }
              </div>
             <div className="game-over-footer">
                <MainButton class_selector={'button-orange'}  text={"Restart"}/>
                <MainButton class_selector={'button-very-light'} text={"Setup New Game"}/>
             </div>
          </Popup>
        </div>
    </div>
  )
}

export default GameOver