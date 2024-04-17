import {UserCardMap} from "./UserMap"
/**
 * A bootstrap card that displays user information
 * @returns the boot strap card structure
 */
export function UserCard({user}) {
  const cardId = `card-${user.id}`

  return <div className="card" id={cardId}>
    <div className="card-header">
      <h2 className="card-title">{user.name}</h2>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{user.username}</li>
      <li className="list-group-item {user.id}">
        <a href={`mailto:${user.email.toLowerCase()}`}>{user.email}</a>
      </li>
    </ul>
    <UserCardMap user={user} />
    <div className="card-body">
      <h5 className="card-title">{user.company.name}</h5>
      <p className="card-text">{user.company.catchphrase}</p>
    </div>
    <div className="card-footer">
      <a className="card-link" href={`tel:${user.phone}`}>{user.phone}</a>
      <a className="card-link" href={user.website}>{user.website}</a>
    </div>
  </div>
}