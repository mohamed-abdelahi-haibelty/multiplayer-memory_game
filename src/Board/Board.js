import "./Board.css"
import "../Header/Header"
import Header from "../Header/Header"
import Grid from "../Grid/Grid"
import Footer from "../Footer/Footer"

function Board() {
  return (
    <div className="board-container">
        <Header></Header>
        <Grid></Grid>
        <Footer/>
    </div>
  )
}

export default Board

