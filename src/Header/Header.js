import "./Header.css"
import "../Logo/Logo"
import Logo from "../Logo/Logo"
import MainButton from "../Buttons/Buttons"

function Header() {


  function handelRestart(){

  }


  function handelNewGame(){

  }


  return (
    <div className="header">
        <Logo/>
        <div className="lg-screen-btns">
          <MainButton onclick={() => handelRestart()} class_selector={`button-orange`} text={"Restart"}/>
          <MainButton onclick={() => handelNewGame()} class_selector={`button-very-light`} text={"New Game"}/>
        </div>
        <MainButton class_selector={`button-menu button-orange`} text={'Menu'}/>
    </div>
  )
}

export default Header