import "./Header.css"
import "../Logo/Logo"
import Logo from "../Logo/Logo"
import MainButton from "../Buttons/Buttons"

function Header() {
  return (
    <div className="header">
        <Logo/>
        <MainButton class_selector={`button-menu button-orange`} text={'Menu'}/>
    </div>
  )
}

export default Header