import { useState } from "react";

function App() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  return <form>
    <CGUCheckbox checked={isTermsAccepted} onCheck={setIsTermsAccepted}/>
    <button type="submit" disabled={!isTermsAccepted}>Send</button>
  </form>
}

function CGUCheckbox ({checked, onCheck}) {

  return <div>
    <label>
      <input 
        type="checkbox" 
        checked={checked}
        onChange={e => onCheck(e.target.checked)}
      />
      I read and accept the conditions of use
    </label>
  </div>
}

export default App;