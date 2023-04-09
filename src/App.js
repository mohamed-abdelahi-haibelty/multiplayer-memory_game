import "./App.css"
import Logo from "./Logo/Logo"
import Popup from "./Popup/Popup"
import Home from "./Home/Home"
import Buttons from "./Buttons/Buttons"

function App() {
  return (
    <div className="container">
        <Home>
            <Logo/>
            <Popup>
                <Buttons class_selector={`button-md button-dark`} text={'numbers'}></Buttons>
                <Buttons class_selector={`button-rounded button-gray`} text={'2'}></Buttons>
                <Buttons class_selector={`button-orange`} text={'4x4'}></Buttons>
                <Buttons class_selector={`button-very-light`} text={'New Game'}></Buttons>
            </Popup>
        </Home>
    </div>
  )
}

export default App