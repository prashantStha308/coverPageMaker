import { useRef } from "react";
import useGlobalStore from "../store/global.store";

const Form = ({handleClick}) => {
    const { userData , semesterData, setUserData , subjectData=[] , loadSubject , loadTargetSem , setSelectedSub , fields , setSelectedFields , loadFieldData , selectedSem , selectedSub , selectedField } = useGlobalStore();
    const subRef = useRef();

    const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({[name]: value})
    };

    const handleFieldChange = async (e) => {
        setSelectedFields(e.target.value);
        await loadFieldData(e.target.value);
    }

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

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const obj = {
            studentName: e.target.studentName.value,
            subject: e.target.subjectSelect.value,
        }
        await handleClick(obj);
    }

    return (
    <section className="flex flex-col border bg-black border-[#27513E] rounded-sm w-fit my-auto items-center text-[#ABB0B2] gap-8 p-4">
        <div className="flex flex-col items-center" >
            <h1 className=" text-xl md:text-2xl font-extrabold text-center " > Make Your Personalized Cover Page </h1>
            <h2 className="text-base md:text-lg text-center font-bold" > Currently available exclusively for IT students of CCT, Dharan. </h2>
        </div>
        <form className="flex flex-col gap-4"  onSubmit={handleSubmit} >
            {/* Student Name */}
            <div className="flex flex-col" >
                <label className="text-sm md:text-base" htmlFor="studentName"> Student's Full Name </label>
                <input type="text" name="studentName" id="studentName" className="border rounded-sm caret-[#297442] focus:outline-none focus:ring-2 focus:ring-[#1F8456] px-2 py-0.5" placeholder="Your Name" value={userData.studentName} onChange={handleChange} required />
            </div>
            {/* Roll Number */}
            <div className="flex flex-col">
                <label className="text-sm md:text-base" htmlFor="rollNumber"> Roll No.: </label>
                <input type="number" name="rollNumber" id="rollNumber" className="border rounded-sm caret-[#297442] focus:outline-none focus:ring-2 focus:ring-[#1F8456] px-2 py-0.5" placeholder="Your Roll Number" value={userData.rollNumber} onChange={handleChange} required />
            </div>
            
            {/* Select Field */}
            <div className="flex items-center gap-4 " >
                <label className="text-sm md:text-base" htmlFor="fieldSelect">Faculty: </label>
                <select name="fieldSelect" id="fieldSelect" value={selectedField} onChange={handleFieldChange} className="cursor-pointer hover:bg-[#103842] bg-[#1A4651] text-[#ABB0B2] p-1 rounded-sm w-36 " >
                    {
                        fields.map((field , index) => (
                            <option key={index} value={field.toLowerCase()} >{field}</option>
                        ))        
                    }
                </select>
            </div>

                {/* Select Semester */}
            <div className="flex items-center gap-4 " >
                <label className="text-sm md:text-base" htmlFor="semesterSelect">Semester: </label>
                <select name="semesterSelect" id="semesterSelect" onChange={handleSemChange} className="cursor-pointer hover:bg-[#103842] bg-[#1A4651] text-[#ABB0B2] p-1 rounded-sm w-36 " >
                    {
                        semesterData.map( (item , index)=>(
                            <option key={index} value={item.index}> {item.name} </option>
                        ))
                    }
                </select>
            </div>
                
            {/* Select Subject */}
            <div className="flex items-center gap-4" >
                <label className="text-sm md:text-base" htmlFor="subjectSelect">Subject: </label>
                <select name="subjectSelect" id="subjectSelect" value={selectedSub} onChange={handleSubChange} className="cursor-pointer hover:bg-[#103842] bg-[#1A4651] text-[#ABB0B2] p-1 rounded-sm w-36 " ref={subRef} >
                    {
                    subjectData.map( (item , index) => (
                        <option key={index} value={item} > {item} </option>
                    ) )
                    }
                </select>
            </div>

            <div className="flex flex-col">
                <button type="submit" className="rounded-sm p-2 cursor-pointer font-bold text-[#5D9971] bg-[#1A4651] hover:bg-[#297442] active:bg-[#297442] transition-all duration-100 ease-in" > Download Page </button>
            </div>

        </form>
    </section>
  )
}

export default Form