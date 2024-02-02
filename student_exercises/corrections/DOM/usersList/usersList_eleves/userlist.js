console.log(USERS)

const getUserFullName = user => `${user.name} ${user.username}`

const createUserCardReal = user => {
  // TODO: create a bootstrap card that represent the given user
  const card = document.createElement("div")
  card.classList.add("card")
  card.id = `card-${user.id}`

  const header = `<div class="card-header"><h2 class="card-title">${(user.name)}</h2></div>`
  card.innerHTML += header
  
  return card
}
const createUserCol = (user) => {
  // TODO: create a bootstrap (col-4 my-3) div
  const colDiv = document.createElement("div")
  colDiv.classList.add("col-4")
  colDiv.classList.add("my-3")

  // TODO: create a bootstrap card for the user using the createUserCardReal function
  // TODO: add the bootstrap card to the col div
  colDiv.appendChild(createUserCardReal(user))
  // colDiv.innerHTML = createUserCardReal(user)

  return colDiv
}

const displayUsers = (users, row) => {
  users.forEach(user => {
    row.appendChild(createUserCol(user))
  })
}

const search = searchStr => {
  // TODO: implement search based on key:value string
  // const [searchKey, searchValue] = searchStr.split(':')
  const searchKey = searchStr.split(':')[0]
  const searchValue = searchStr.split(':')[1]
  let users = USERS
  // TODO: your search here
  return users
}

