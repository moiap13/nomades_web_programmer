export function search(searchStr, array) {
  const [searchKey, searchValue] = searchStr.split(':')
  const getUserFullName = user => `${user.name} ${user.username}`

  switch(searchKey){
    case 'id':
      return array.filter(user => user.id === parseInt(searchValue))
    case 'name':
      return array.filter(user => user.name.toLowerCase().includes(searchValue))
    case 'username':
      return array.filter(user => user.username.toLowerCase().includes(searchValue))
    case 'fullname':
      return array.filter(user => getUserFullName(user).toLowerCase().includes(searchValue))
    case 'email':
      return array.filter(user => user.email.toLowerCase().includes(searchValue))
    case 'address':
      return array.filter(user => {
        const address = `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`
        return address.toLowerCase().includes(searchValue)
      })
    case 'phone':
      return array.filter(user => user.phone.toLowerCase().includes(searchValue))
    case 'website':
      return array.filter(user => user.website.toLowerCase().includes(searchValue))
    case 'company':
      return array.filter(user => user.company.name.toLowerCase().includes(searchValue))
    default:
      return array
  }
}