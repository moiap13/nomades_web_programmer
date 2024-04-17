export function InputLabel({placeholder, value, onValueChanged, label}){
  const randomId = Math.random().toString(36).substring(7)

  return <div className="form-group">
    {label && <label htmlFor={randomId}>{label}</label>}
    <input 
      type="email" 
      className="form-control" 
      id={randomId} 
      placeholder={placeholder}
      value={value}
      onChange={e => {onValueChanged(e.target.value)}}
    />
  </div>
}