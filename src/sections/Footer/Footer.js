import "./Footer.css"
import SquareHr, { SquareVr } from "../../components/Squares/Squares"
import { useState, useEffect } from "react"
import GameOver from "../../components/GameOver/GameOver";

function Footer(prop) {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const is_multiplayer = prop.is_multiplayer
  // console.log(prop.is_end_game)


  useEffect(() => {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1 )
      }, 1000);
      
      setTimerId(id)

      return () => clearInterval(id)
  }, [])

  const timer = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`

  }

  const handelStopTimer = (timerId) => {
    // console.log('handelstoptimer')
    clearInterval(timerId)
  }

  if (prop.is_end_game === 0){
    // console.log("handelstopcondition")
    handelStopTimer(timerId)
  }

  return (
    <>
      {/* <GameOver time={'1:53'} title={"You did it "} state={"Game over! Here is how you got on..."} moves={"39 Moves"}/> */}
      <div className="footer">
        {is_multiplayer.length <= 0 ? (
          <>
            <SquareHr text={timer(time)} title={"Time"} />
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