import { ReactChild, ReactFragment, ReactPortal } from 'react'
import './PatientCard.css'

interface MyProps {
  name: string;
  surname: string;
  birth: number;
  gender: string;
  illness: string;
  photo: string;
}


function PatientCard({name, surname, birth, gender, illness, photo}:MyProps) {
    return (
    <section className="patient_card">
      <img src={photo} alt="" className="patient_card__photo"/>
      <article className="patient_card__article">
        <p><b>Имя: </b>{name}</p>
        <p><b>Фамилия: </b>{surname}</p>
        <p><b>Год рождения: </b>{birth}</p>
        <p><b>Пол: </b>{gender}</p>
        <p><b>Диагноз: </b>{illness}</p>
      </article>
    </section>
  )
}

export default PatientCard
