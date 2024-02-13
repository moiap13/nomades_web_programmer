
/**
 * Map component to display the user's address
 * Used to be inserted inside the UserCard component
 * @param {user} user 
 */
export function UserCardMap({user}) {
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
      <div id={mapId} className="card-map" style={{width: "100%", height: "300px"}}>
      </div>
    </div>
}