import ReactDOM from "react-dom";
import './Timer.css'

function Timer() {
const text_n_clock = (
    <p className="text_n_clock">В палате сейчас {new Date().toLocaleTimeString()}</p>
)
  ReactDOM.render( text_n_clock, document.getElementById('time')
  )
}

export default Timer