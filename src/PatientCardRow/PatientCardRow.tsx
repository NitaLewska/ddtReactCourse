interface PatientCardRowProps {
  text: string;
  propName: string;
}

function PatientCardRow({text, propName}: PatientCardRowProps) {
  return (
    <p><b>{text}</b>{propName}</p>
    )
}

export default PatientCardRow