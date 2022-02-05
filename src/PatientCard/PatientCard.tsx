import './PatientCard.css';
import PatientCardRow from "../PatientCardRow/PatientCardRow"

interface MyProps {
  name: string;
  surname: string;
  birth: number|string;
  gender: string;
  illness: string;
  photo: string;
}




function PatientCard({name, surname, birth, gender, illness, photo}:MyProps) {
    return (
    <section className="patient_card">
      <img src={photo} alt="" className="patient_card__photo"/>
      <article className="patient_card__article">
        <PatientCardRow text="Имя: " propName={name}  />
        <PatientCardRow text="Фамилия: " propName={surname}  />
        <PatientCardRow text="Год рождения: " propName={birth}  />
        <PatientCardRow text="Пол: " propName={gender}  />
        <PatientCardRow text="Диагноз: " propName={illness}  />
      </article>
    </section>
  )
}

export default PatientCard
