import './Home.css'

function Home(props) {
  return (
    <div className='home-container'>{props.children}</div>
  )
}

export default Home