const Input = ({ label="label" , htmlFor="label" , type = "text" , required= "false" , placeholder= "" }) => {
  return (
    <div className="flex gap-2 items-center" >
        <label htmlFor={htmlFor}> {label}: </label>
        <input type={type} required={required} name={htmlFor} placeholder={placeholder} className="p-0.5 rounded-sm" />
    </div>
  )
}

export default Input