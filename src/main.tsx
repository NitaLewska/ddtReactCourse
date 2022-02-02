import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Patient_card from './Patient_card'
import Timer from './Timer'
import photo from './img/owl_depressed.jpg'

ReactDOM.render(
  <React.StrictMode>
    <Patient_card name="Бла" surname="Блабла" birth="неизвестен" gender="неизвестен" illness="депресука" photo={photo}/>
  </React.StrictMode>,
  document.getElementById('root')
)

setInterval(Timer, 1000);