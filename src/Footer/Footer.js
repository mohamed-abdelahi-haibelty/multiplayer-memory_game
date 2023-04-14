import "./Footer.css"
import SquareHr from "../Squares/Squares"
import { useState, useEffect } from "react"

function Footer(prop) {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState(null);


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

  // const handelStopTimer = () => {
  //     clearInterval(timerId)
  // }

  return (
    <div className="footer">
        <SquareHr text={timer(time)} title={"Time"}/>
        <SquareHr text={prop.moves} title={"Moves"}/>
    </div>
  )
}

export default Footer