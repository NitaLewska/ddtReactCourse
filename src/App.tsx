import PatientCard from './PatientCard/PatientCard'
import Timer from './Timer/Timer'
import photo from './img/owl_depressed.jpg'

function App() {
    setInterval(Timer, 1000);
  return (
    <PatientCard name="Бла" surname="Блабла" birth="неизвестен" gender="неизвестен" illness="депресука" photo={photo}/>
    )
}

export default App