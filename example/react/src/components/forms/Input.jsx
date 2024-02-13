/**
 * Input component
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void} onChange 
 */
export function Input({placeholder, value, onChange, label}) {
  const randomId = Math.random().toString(36).substring(7);
  return <div>
      {label && <label className="form-label" htmlFor={randomId}>{label}</label>}
      <input
        id={randomId}
        type="text" 
        className="form-control"
        placeholder={placeholder} 
        value={value} 
        onChange={e => {
          onChange(e.target.value);
        }}/>
    </div>
}