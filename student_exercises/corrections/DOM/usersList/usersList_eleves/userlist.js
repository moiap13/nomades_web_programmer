const getUserFullName = user => `${user.name}`

const createUserCardReal = user => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.id = `card-${user.id}`

  const cardHeader = document.createElement('div')
  cardHeader.classList.add('card-header')

  const cardTitle = document.createElement('h2')
  cardTitle.classList.add('card-title')
  cardTitle.textContent = getUserFullName(user)

  cardHeader.appendChild(cardTitle)
  card.appendChild(cardHeader)

  const cardUserInfoList = document.createElement('ul')
  cardUserInfoList.classList.add('list-group')
  cardUserInfoList.classList.add('list-group-flush')

  const cardUserInfoUsername = document.createElement('li')
  cardUserInfoUsername.classList.add('list-group-item')
  cardUserInfoUsername.textContent = user.username

  const cardUserInfoEmail = document.createElement('li')
  cardUserInfoEmail.classList.add('list-group-item')
  const cardUserInfoEmailLink = document.createElement('a')
  cardUserInfoEmailLink.href = `mailto:${user.email}`
  cardUserInfoEmailLink.textContent = user.email
  cardUserInfoEmail.appendChild(cardUserInfoEmailLink)

  cardUserInfoList.appendChild(cardUserInfoUsername)
  cardUserInfoList.appendChild(cardUserInfoEmail)
  card.appendChild(cardUserInfoList)

  const cardBodyMap = document.createElement('div')
  cardBodyMap.classList.add('card-body')

  const cardBodyMapDiv = document.createElement('div')
  cardBodyMapDiv.id = `map-${user.id}`
  cardBodyMap.classList.add('card-map')

  cardBodyMap.appendChild(cardBodyMapDiv)
  card.appendChild(cardBodyMap)

  setTimeout(() => {
    const map = L.map(cardBodyMap,{
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
  }, 0)

  const cardBody = document.createElement('div')
  cardBody.classList.add('card-body')
  
  const cardBodyTitle = document.createElement('h5')
  cardBodyTitle.classList.add('card-title')
  cardBodyTitle.textContent = user.company.name

  const cardBodyText = document.createElement('p')
  cardBodyText.classList.add('card-text')
  cardBodyText.textContent = user.company.catchPhrase

  cardBody.appendChild(cardBodyTitle)
  cardBody.appendChild(cardBodyText)
  card.appendChild(cardBody)

  const cardFooter = document.createElement('div')
  cardFooter.classList.add('card-footer')

  const cardFooterLink1 = document.createElement('a')
  cardFooterLink1.classList.add('card-link')
  cardFooterLink1.href = `tel:${user.phone}`
  cardFooterLink1.textContent = user.phone

  const cardFooterLink2 = document.createElement('a')
  cardFooterLink2.classList.add('card-link')
  cardFooterLink2.href = user.website
  cardFooterLink2.textContent = user.website

  cardFooter.appendChild(cardFooterLink1)
  cardFooter.appendChild(cardFooterLink2)
  card.appendChild(cardFooter)

  return card
}
const createUserRow = (user) => {
  const userCardContainer = document.createElement('div')
  userCardContainer.classList.add('col-4', 'my-3')
  const userCard = createUserCardReal(user)
  userCardContainer.appendChild(userCard)
  // Here the ROW_USERS come from the custom code in the script inside the HTML file
  ROW_USERS.appendChild(userCardContainer)
}

const displayUsers = users => {
  users.forEach(createUserRow)
}

const search = searchStr => {
  const [searchKey, searchValue] = searchStr.split(':')

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

