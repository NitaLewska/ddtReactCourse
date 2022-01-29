import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App(props) {
    return (
    <section className="patient_card">
      <img src={props.photo} alt="" className="patient_card__photo"/>
      <article className="patient_card__article">
        <p><b>Имя: </b>{props.name}</p>
        <p><b>Фамилия: </b>{props.surname}</p>
        <p><b>Год рождения: </b>{props.birth}</p>
        <p><b>Пол: </b>{props.gender}</p>
        <p><b>Диагноз: </b>{props.illness}</p>
      </article>
    </section>
  )
}

export default App
