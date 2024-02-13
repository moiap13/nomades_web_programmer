import {USERS} from "./data/users.js"
import { useState } from "react"
function App() {
  const [search, setSearch] = useState('')

  const searchFun = searchStr => {
    const [searchKey, searchValue] = searchStr.split(':')
    const getUserFullName = user => `${user.name} ${user.username}`
  
    switch(searchKey){
      case 'id':
        return USERS.filter(user => user.id === parseInt(searchValue))
      case 'name':
        return USERS.filter(user => user.name.toLowerCase().includes(searchValue))
      case 'username':
        return USERS.filter(user => user.username.toLowerCase().includes(searchValue))
      case 'fullname':
        return USERS.filter(user => getUserFullName(user).toLowerCase().includes(searchValue))
      case 'email':
        return USERS.filter(user => user.email.toLowerCase().includes(searchValue))
      case 'address':
        return USERS.filter(user => {
          const address = `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
          return address.toLowerCase().includes(searchValue)
        })
      case 'phone':
        return USERS.filter(user => user.phone.toLowerCase().includes(searchValue))
      case 'website':
        return USERS.filter(user => user.website.toLowerCase().includes(searchValue))
      case 'company':
        return USERS.filter(user => user.company.name.toLowerCase().includes(searchValue))
      default:
        return USERS
    }
  }

  return <>
    <NavBar onSearch={setSearch}/>
    <UsersList users={ searchFun(search) }/>
  </>
}

function NavBar({onSearch}) {
  const handleClick = (e) => {
    e.preventDefault()
    const search = document.getElementById('user-search').value.trim()
    onSearch(search)
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
  return <>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row"><div className="col-12"><h1>Users</h1></div></div>
          <div className="row">
            {users.map(user => {
                return<>
                  <div key={user.id} className="col-4">
                    <UserCard user={user} />
                  </div>
                </> 
              })
            }
          </div>
        </div>
      </div>
    </div>
  </>
}

function UserCard({user}) {
  const id = `card-${user.id}`
  const mailTo = `mailto:${user.email}`
  const tel = `tel:${user.phone}`


  return <>
    <div className="card" id={id}>
      <div className="card-header">
        <h2 className="card-title">{user.name}</h2>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{user.username}</li>
        <li className="list-group-item"><a href={mailTo}>{user.email}</a></li>
      </ul>
      <UserCardMap user={user} />
      <div className="card-body">
        <h5 className="card-title">{user.company.name}</h5>
        <p className="card-text">{user.company.catchPhrase}</p>
      </div>
      <div className="card-footer">
        <a className="card-link" href={tel}>{user.phone}</a>
        <a className="card-link" href={user.website}>{user.website}</a>
      </div>
    </div>
  </>
}

/**
 * Map component to display the user's address
 * Used to be inserted inside the UserCard component
 * @param {user} user 
 */
function UserCardMap({user}) {
  const mapId = `map-${user.id}`
  setTimeout(() => {
    const map = L.map(mapId,{
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        layers: [ 
          L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
            minZoom: 0,
            maxZoom: 20,
            attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            ext: 'png'
          })
        ],
        maxZoom: 18,
        minZoom: 6
    }).setView([user.address.geo.lat, user.address.geo.lng], 13);
    const marker = L.marker([user.address.geo.lat, user.address.geo.lng])
    marker.addTo(map)
    marker.bindPopup(
      `<div class="userAddress">
        <p class="userStreet">${user.address.street}</p>
        <p class="userSuite">${user.address.suite}</p>
        <p class="userCityZip">${user.address.city}, ${user.address.zipcode}</p>
      </div>`
    ).openPopup();
  }, 200)

  return <div className="card-body">
      <div id={mapId} className="card-map" style={{with: "100%", height: "300px"}}>
      </div>
    </div>
}

export default App
