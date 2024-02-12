const todos = ['learn react', 'use JSX', 'Create a component', 'Build an app']
function App() {
  return <>
    <Title color="red" hidden>Coucou</Title>
    <ul>
      {todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
  </>
}

function Title({color, children, hidden}) {
  const title = "Hello world!"
  
  if (hidden) return null
  return <h1 style={{color: color}}>{children ? children : title}</h1>
}
export default App
