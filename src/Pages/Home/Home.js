import './Home.css'
import Logo from "../../components/Logo/Logo"
import Popup from "../../components/Popup/Popup"
import Button from "../../components/Buttons/Buttons"
import TextLabel from "../../components/TextLabel/TextLabel"
import {Link} from "react-router-dom"

function Home(props) {
  const classes_list = [`button-sm button-dark`, `button-sm button-gray`, 
  `button-sm button-gray`, `button-sm button-gray`]


  let plyrs_btns_nums = classes_list.map((class_name, index) => {
            return <Button class_selector={`${class_name}`} text={index + 1} key={index + 1}></Button>
  })

  let select_them_data = [
    {class_selector:`button-md button-dark`, text: "Numbers"}, 
    {class_selector:`button-md button-gray`, text: "Icons"}, 
  ]

  let select_them_btns = select_them_data.map((btn, indx) => {
    return <Button class_selector={btn.class_selector} text={btn.text} key={indx + 1}></Button>
  })

  let grid_size_data = [
    {class_selector:`button-md button-dark`, text: "4x4"}, 
    {class_selector:`button-md button-gray`, text: "6x6"}, 
  ]



  let grid_size_btns = grid_size_data.map((btn, indx) => {
      return <Button class_selector={btn.class_selector} text={btn.text} key={indx + 1}></Button>
  })

  return (
    <div className='home-container'>
      <Logo/>
            <Popup>
                <TextLabel>Select theme</TextLabel>
                <div className="select-them">
                  {select_them_btns}
                </div>
                <TextLabel>Numbers of Players</TextLabel>
                <div className="select-numbers">
                  {plyrs_btns_nums}
                </div>
                <TextLabel>Grid size</TextLabel>
                <div className="select-grid-size">
                  {grid_size_btns}
                </div>
                <div className="start-game">
                  <Link to='/game' onClick={() => document.body.style.backgroundColor = '#FCFCFC'}>
                    <Button class_selector={` button-orange`} text={'Start Game'}></Button>
                  </Link>
                </div>
            </Popup>
    </div>
  )
}

export default Home