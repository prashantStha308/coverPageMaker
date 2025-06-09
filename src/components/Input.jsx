const Input = ({ label = "label", htmlFor = "label", type = "text", required = false, placeholder = "", value = "", onChange }) => {
  return (
    <div className="flex items-center gap-2 " >
      <label htmlFor={htmlFor}>{label}:</label>
      <input
        id={htmlFor}
        name={htmlFor}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-0.5 border"
      />
    </div>
  );
};

export default Input;
