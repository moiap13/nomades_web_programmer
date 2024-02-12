import {USERS} from "./data/users.js"
function App() {
  return <>
    <NavBar />
    <UsersList />
  </>
}

function NavBar() {
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
          <button className="btn btn-outline-success my-2 my-sm-0" type="button" id="user-search-btn">Search</button>
        </form>
      </div>
    </nav>
  </>
}

function UsersList() {
  return <>
    <ul>
      {USERS.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  </>
}

export default App