import "./Logo.css"

function Logo(props) {

  return (
    <div style = {{'color': props.color}} className='logo'>memory</div>
  )

}

export default Logo