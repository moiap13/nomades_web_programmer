import { useState } from "react";

function App() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const changeCheck = (b, setter) => {
    if(b){
      console.log("Boolean true")
    }
    setter(b)
  }
  return <form>
    <CGUCheckbox 
      checked={isTermsAccepted} 
      onChecked={setIsTermsAccepted} 
    />
    <button 
      type="button" 
      onClick={_ => changeCheck(!isTermsAccepted, setIsTermsAccepted)}
    >change check</button>
    <button type="submit" disabled={!isTermsAccepted}>Send</button>
  </form>
}

function CGUCheckbox ({checked, onChecked}) {
  return <div>
    <label>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={e => {onChecked(e.target.checked)}}
      />
      I read and accept the conditions of use
    </label>
  </div>
}

export default App;