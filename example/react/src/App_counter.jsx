import { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    firstName: 'Antonio',
    lastName: 'Pisanello',
    age: 28
  });
  
  if (person.age > 30) {
    const [count, setCount] = useState(0);
  }
  
  const incrementAge = () => {
    setPerson({...person, age: person.age+1});
  }

  return <>
    <p>Age of {person.firstName} is {person.age}</p>
    <button onClick={incrementAge}>Increment age</button>
  </>
}
export default App
