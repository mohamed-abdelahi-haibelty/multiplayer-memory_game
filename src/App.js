
import "./App.css"
import Board from "./Pages/Board/Board"
import Home from "./Pages/Home/Home"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Router>
      <div className="container" >
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/game' element={<Board/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App