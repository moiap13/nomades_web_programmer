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

function ControlledInputRangeLabel({ value, valueSetter, label, id, ...props }){
  const myId = id || Math.random().toString(36).substring(7)

  return <div className="form-group">
    { label && <label htmlFor={myId} className="form-label">{ label }</label>}
    <input 
      type="range" 
      className="form-range" 
      id={myId} 
      value={value}
      onChange={e => {valueSetter(e.target.value)}}
      
      {...props}
    />
  </div>
}

function ControlledCheckboxLabel({checked, checkedSetter, label, ...props}){
  const randomId = Math.random().toString(36).substring(7)

  return <div className="form-check">
    <input
      id={randomId}
      type="checkbox"
      className="form-check-input"
      checked={checked}
      onChange={e => checkedSetter(e.target.checked)}
      {...props}
    />
    {label && <label className="form-check-label" htmlFor={randomId}>{label}</label>}
  </div>
}

export {
  ControlledInputLabel,
  ControlledInputRangeLabel,
  ControlledCheckboxLabel
}