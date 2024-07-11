function ControlledInputLabel({ value, valueSetter, placeholder, type, name, label, id, ...props }) {
  const myId = id || Math.random().toString(36).substring(7)
  
  return <div className="form-group">
    {label && <label htmlFor={myId}> { label } </label>}
    <input 
      type={type || "text"} 
      className="form-control" 
      id={myId}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={e => {valueSetter(e.target.value)}}

      {...props}
    ></input>
  </div>
}