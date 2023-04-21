import "./Header.css"
import Logo from "../../components/Logo/Logo"
import MainButton from "../../components/Buttons/Buttons"
import Popup from "../../components/Popup/Popup"
import { useState, useContext} from "react"
import { gameFunctions } from "../../Pages/Board/Board"

function Header(props) {

  const {handelRestart, handelNewGame} = useContext(gameFunctions)
  const [showMenu, SetShowMenu] = useState(false);

  const menuData = [
    {onClick : handelRestart, class_selector: 'button-orange', text: "Restart" },
    {onClick : handelNewGame, class_selector: 'button-very-light',text: "New Game"},
    {onClick : () => SetShowMenu(false), class_selector: 'button-very-light',text: "Resume Game"}
  ]

 let menuItems = menuData.map((btn, i) => {
    return <MainButton onClick={btn.onClick} 
    class_selector={btn.class_selector} text={btn.text} key={i}/>
 })

 let slicedData = menuData.slice(0, 2)
 let lgItems =  slicedData.map((btn, i) => {
          return <MainButton onClick={btn.onClick} 
          class_selector={btn.class_selector} text={btn.text} key={i}/>
        })

  return (
    <>
      <div className="header">
        <Logo/>
        <div className="lg-screen-btns">
              {lgItems}
        </div>
        <MainButton onClick={()=> SetShowMenu(true)} class_selector={`button-menu button-orange`} text={'Menu'}/>
      </div>
      

      {showMenu && (
        <div className="menu-popup">
          <div className="overlay"></div>
            <div className="cn">
              <Popup>
                  {menuItems}
              </Popup>
            </div>
        </div>
      )}
    </>
  )
}

export default Header