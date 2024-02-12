
function App() {
  const title = "Hello World!"
  const style = {color: 'green', fontSize: '2em'}
  const handleClick = (e) => {
    console.log(e.target)
    alert('Hello World!')
  }

  const logged = false
  const todos = ['learn react', 'use JSX', 'Create a component', 'Build an app']
  return <>
    {
      logged ?
      <h1 
      id="title"
      className={title}
      htmlFor="title"
      autoFocus
      style={{color: "pink"}}
      onClick={handleClick}
      >
        Re-Hello
      </h1> :
      <p>
        {title}
      </p> 
      }
      <ul>
        {todos.map((todo, i) => <li data-key={i} key={i}>{todo}</li>)}
      </ul>
    </>
}

export default App
