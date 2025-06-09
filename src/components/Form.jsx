import { useRef } from "react";
import useGlobalStore from "../store/global.store";
import Input from "./Input";

const Form = () => {
  const { userData , semesterData, setUserData , subjectData=[] , loadSubject , loadTargetSem , setSelectedSub } = useGlobalStore();
  const subRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({[name]: value})
  };

  const handleSemChange = (e)=>{
    const index = parseInt(e.target.value)
    loadSubject(index);
    loadTargetSem(index);

    if(subRef.current !== null){
      subRef.current.selectedIndex = 0;
    }
  }

  const handleSubChange = (e)=>{
    setSelectedSub(e.target.value);
  }

  return (
    <form className="grid grid-cols-3" >
      <Input
        label="Student Name"
        htmlFor="studentName"
        placeholder="Enter your name"
        value={userData.studentName}
        onChange={handleChange}
      />

      <Input
        label="Roll Number"
        htmlFor="rollNumber"
        type="number"
        placeholder="Enter your roll number"
        value={userData.rollNumber}
        onChange={handleChange}
      />

    <div className="flex items-center gap-4" >
      <label htmlFor="semesterSelect">Semester: </label>
      <select name="semesterSelect" id="semesterSelect" onChange={handleSemChange} className="bg-neutral-300 p-1 rounded-sm" >
          {
            semesterData.map( (item , index)=>(
                <option key={index} value={item.index}> {item.name} </option>
            ))
          }
      </select>
    </div>

    <div className="flex items-center gap-4" >
      <label htmlFor="subjectSelect">Subject: </label>
      <select name="subjectSelect" id="subjectSelect" onChange={handleSubChange} className="bg-neutral-300 p-1 rounded-sm" ref={subRef} >
        {
          subjectData.map( (item , index) => (
            <option key={index} value={item} > {item} </option>
          ) )
        }
      </select>
    </div>
    
    </form>
  );
};

export default Form;
