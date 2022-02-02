import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Patient_card from './Patient_card'
import Timer from './Timer'

ReactDOM.render(
  <React.StrictMode>
    <Patient_card name="Бла" surname="Блабла" birth="неизвестен" gender="неизвестен" illness="депресука" photo="./src/img/owl_depressed.jpg"/>
  </React.StrictMode>,
  document.getElementById('root')
)

setInterval(Timer, 1000);