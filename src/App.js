
import { createContext, useState } from "react"
import "./App.css"
import Board from "./Pages/Board/Board"
import Home from "./Pages/Home/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

export const gameContext = createContext()

function App() {
  const [game_param, setGameParam] = useState({theme:'Numbers', plyrs_nums:'1', grid:'4x4'})

  
  return (
    <Router>
      <div className="container" >
      <gameContext.Provider value = {{game_param, setGameParam}}>
        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/game' element={<Board/>} />
        </Routes>
      </gameContext.Provider>
      </div>
    </Router>
  )
}

export default App