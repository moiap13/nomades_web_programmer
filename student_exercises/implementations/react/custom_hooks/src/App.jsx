import { useState } from "react"
import { useIcrement, useIcrementRetObj, useIcrementObj } from "./hooks/useIncrement"
import { useToggle } from "./hooks/useToggle"
import { useDocumentTitle } from "./hooks/useDocumentTitle"
import { useFetch } from "./hooks/useFetch"

// function App() {
//   const [checked, toggleChecked] = useToggle(true)
//   return <div>
//     <input type="checkbox" checked={checked} onChange={toggleChecked} />
//     {checked ? 'checked' : 'not checked'}
//   </div>
// }

// function App() {
//   const [count, increment, decrement] = useIcrement(0)
//   return <div>
//     <button onClick={decrement}>-</button>
//     {count}
//     <button onClick={increment}>+</button>
//   </div>
// }

// function App() {
//   const { value: count, decrement } = useIcrementRetObj({
//     base: 4,
//     min: 2
//   })
//   return <div>
//     <p>{count}</p>
//     <button onClick={decrement}>-</button>
//   </div>
// }

// function App() {
//   const {value:count, increment, decrement} = useIcrementObj({
//     base: 0,
//     step: 2,
//     max: 10,
//     min: -10
//   })
//   return <div>
//     <button onClick={decrement}>-</button>
//     {count}
//     <button onClick={increment}>+</button>
//   </div>
// }

// function App() {
//   const [name, setName] = useState('')
//   useDocumentTitle(name ? `Editer ${name}` : null)
//   return <div>
//     <input value={name} onChange={e => setName(e.target.value)} />
//   </div>
// }

function App() {
  const [data, loading, errors] = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=3000', {})
  return<>
    <div className="container my-2">
      {
        loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )
      }
      {
        errors && (
          <div className="alert alert-danger" role="alert">
            {errors.toString()}
          </div>
        )
      }
      {
        data && (
          <div>
            <h1>Posts</h1>
            <ul className="list-group">
              {
                data.map(post => (
                    <li key={post.id} className="list-group-item">{post.title}</li>
                  )
                )
              }
            </ul>
          </div>
        )
      }
    </div>
  </>
}
export default App
