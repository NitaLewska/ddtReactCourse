import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App name="Бла" surname="Блабла" birth="неизвестен" gender="неизвестен" illness="депресука" photo="src/img/owl_depressed.jpg"/>
  </React.StrictMode>,
  document.getElementById('root')
)
