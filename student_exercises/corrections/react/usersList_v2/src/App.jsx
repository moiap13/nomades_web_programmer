import { useState } from "react"
import { UserCard } from "./components/UserCard.jsx"
import {USERS} from "./data/users.js"
import { search } from "./helpers/search/search.js"
function App() {
  const [searchKW, setSearchKW] = useState('')
  const users = search(searchKW, USERS)
  return <>
    <NavBar onSearchKW={setSearchKW}/>
    <UsersList users={users}/>
  </>
}

function NavBar({onSearchKW}) {
  const handleClick = _ => {
    const searValue = document.querySelector("#user-search").value
    onSearchKW(searValue)
  }
  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Users <span className="sr-only">(current)</span></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="user-search" />
          <button onClick={handleClick} className="btn btn-outline-success my-2 my-sm-0" type="button" id="user-search-btn">Search</button>
        </form>
      </div>
    </nav>
  </>
}

function UsersList({users}) {
  return <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h1>Users</h1>
          </div>
        </div>
        <div className="row">
          {
            users.map(user => {
              return <div className="col-4 my-3" key={user.id}>
                <UserCard user={user} />
              </div>
            })
          }
        </div>
      </div>
    </div>
  </div>
}


export default App
