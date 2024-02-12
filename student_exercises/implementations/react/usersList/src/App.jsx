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
