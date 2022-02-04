import { ReactChild, ReactFragment, ReactPortal } from 'react'
import './PatientCard.css'

function Patient_card(props: { photo: string | undefined; name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; surname: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; birth: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; gender: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; illness: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) {
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

export default Patient_card
