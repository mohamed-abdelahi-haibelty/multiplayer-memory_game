import './Home.css'
import Logo from "../../components/Logo/Logo"
import Popup from "../../components/Popup/Popup"
import Button from "../../components/Buttons/Buttons"
import TextLabel from "../../components/TextLabel/TextLabel"
import {Link} from "react-router-dom"
import { useEffect} from 'react'
import { useContext } from 'react'
import { gameContext } from '../../App'

function Home(props) {
  const classes_list = [`button-sm button-dark`, `button-sm button-gray`,
  `button-sm button-gray`, `button-sm button-gray`]

  //theme, plyrs_nums, grid
  //  const [game_param, setGameParam] = useState({theme:'', plyrs_nums:'', grid:''})
   const {game_param, setGameParam} = useContext(gameContext)

  let plyrs_btns_nums = classes_list.map((class_name, index) => {
            return <Button onClick={(event) => handleBtns(event, index, ".select-numbers button", "plyrs_nums", index + 1)} class_selector={`${class_name}`} text={index + 1} key={index + 1}></Button>
  })



  let select_them_data = [
    {class_selector:`button-md button-dark `, text: "Numbers"},
    {class_selector:`button-md button-gray `, text: "Icons"},
  ]

   const handleBtns = (event, index, target, type, data) => {
     const allWithClass = Array.from(
      document.querySelectorAll(target)
     );
    
     console.log(allWithClass)
     allWithClass.forEach((el) => {
        el.classList.remove('button-dark')
        el.classList.add("button-gray")
     })

    console.log(type)
     switch (type) {
      case 'theme':
        setGameParam({...game_param, theme:data})
        break;
      case 'plyrs_nums':
        setGameParam({...game_param, plyrs_nums:data})
        break;
      case 'grid':
        setGameParam({...game_param, grid:data})
        break;
      default:
        console.log(`${type} is not valid`);
    }


     event.currentTarget.classList.remove('button-gray');
     event.currentTarget.classList.add('button-dark');

   }

   useEffect(() => {
    console.log(game_param);
  }, [game_param]);



  let select_them_btns = select_them_data.map((btn, index) => {
    return <Button onClick={(event) => handleBtns(event, index, ".select-them button", "theme", btn.text)} class_selector={btn.class_selector} text={btn.text} key={index + 1}></Button>
  })

  let grid_size_data = [
    {class_selector:`button-md button-dark`, text: "4x4"},
    {class_selector:`button-md button-gray`, text: "6x6"},
  ]



  let grid_size_btns = grid_size_data.map((btn, index) => {
      return <Button onClick={(event) => handleBtns(event, index, ".select-grid-size button", "grid", btn.text)} class_selector={btn.class_selector} text={btn.text} key={index + 1}></Button>
  })

  return (
    <div className='home-container'>
      <Logo/>
            <Popup>
                <TextLabel>Select theme</TextLabel>

                {/* choose between the number them or the icon one */}
                <div className="select-them">
                  {select_them_btns}
                </div>

                {/* Choose numbers of players: 1, 2, 3 or 4 */}
                <TextLabel>Numbers of Players</TextLabel>
                <div className="select-numbers">
                  {plyrs_btns_nums}
                </div>

                {/* Choose grid size: 4x4 or 6x6 */}
                <TextLabel>Grid size</TextLabel>
                <div className="select-grid-size">
                  {grid_size_btns}
                </div>

                <div className="start-game">
                  <Link to='/game' onClick={() => document.body.style.backgroundColor = '#FCFCFC'}>
                    <Button  class_selector={` button-orange`} text={'Start Game'}></Button>
                  </Link>
                </div>
            </Popup>
    </div>
  )
}

export default Home