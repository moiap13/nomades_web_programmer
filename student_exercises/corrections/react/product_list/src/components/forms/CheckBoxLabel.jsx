export function CheckboxLabel({checked, onChangeChecked, label}){
  const randomId = Math.random().toString(36).substring(7)

  return <div className="form-check">
    <input
      id={randomId}
      type="checkbox"
      className="form-check-input"
      checked={checked}
      onChange={e => onChangeChecked(e.target.checked)}
    />
    {label && <label className="form-check-label" htmlFor={randomId}>{label}</label>}
  </div>
}