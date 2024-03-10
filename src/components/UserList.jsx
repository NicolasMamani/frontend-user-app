import UserRow from './UserRow'

const UserList = ({
  handlerRemoveUser,
  initialUser = [],
  handlerUserSelectedForm,
}) => {
  return (
    <table className='table table-hover table-striped'>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>email</th>
          <th>update</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {initialUser ? (
          initialUser.map(user => {
            return (
              <UserRow
                key={user.id}
                id={user.id}
                username={user.username}
                email={user.email}
                handlerRemoveUser={handlerRemoveUser}
                handlerUserSelectedForm={handlerUserSelectedForm}
              />
            )
          })
        ) : (
          <h2>cargando...</h2>
        )}
      </tbody>
    </table>
  )
}

export default UserList
