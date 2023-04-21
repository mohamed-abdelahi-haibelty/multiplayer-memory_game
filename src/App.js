import { createContext, useState } from "react"
import "./App.css"
import Board from "./Pages/Board/Board"
import Home from "./Pages/Home/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect } from "react"

export const gameContext = createContext()

function App() {

  const [game_param, setGameParam] = useState(() => {
    let localData = localStorage.getItem('game_state')
    return localData? JSON.parse(localData) : {theme:'Numbers', plyrs_nums: 1, grid:'4x4'}
  })

  // const [body, setBody] = useState(() => {
  //   return localStorage.getItem('body_color')? localStorage.getItem('body_color') : '#152938'
  // })

  // useEffect(() => {
  //   localStorage.setItem('body_color', body)
  //   document.body.style.backgroundColor = body
  // }, [body])

  useEffect(() => {
    localStorage.setItem('game_state', JSON.stringify(game_param))
  }, [game_param])
  
  return (
    <Router>
      <div className="container" >
      <gameContext.Provider value = {{game_param, setGameParam}}>
        <Routes>
        {/* bodyBg={setBody} */}
            <Route path='/' element={<Home ></Home>} />
            <Route path='/game' element={<Board />} />
        </Routes>
      </gameContext.Provider>
      </div>
    </Router>
  )
}

export default App