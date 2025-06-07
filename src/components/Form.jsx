import Input from "./Input"

const Form = () => {
  return (
    <form className="flex gap-2" >
        <Input type="text" label="Full Name" htmlFor="studentName" required={true} placeholder="Prashant Shrestha" />
        <Input type="number" label="Roll Number" htmlFor="rollNumber" required={true} placeholder={1} />

        <label htmlFor="semesterSelect" > Semester: </label>
        <select name="semesterSelect" id="semesterSelect"></select>

        <label htmlFor="subjectSelect"> Subject: </label>
        <select name="subjectSelect" id="subjectSelect"></select>

    </form>
  )
}

export default Form