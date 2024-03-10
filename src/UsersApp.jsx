import UserForm from './components/UserForm'
import UserList from './components/UserList'
import { useUsers } from './hooks/useUsers'

const UsersApp = () => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handleOpenForm,
    handleCloseForm,
  } = useUsers()
  return (
    <div className='container my-4'>
      <h2>Users App</h2>
      <div className='row'>
        {!visibleForm || (
          <div className='col'>
            <UserForm
              handlerUser={handlerUser}
              initialUserForm={initialUserForm}
              userSelected={userSelected}
              handleCloseForm={handleCloseForm}
            />
          </div>
        )}

        <div className='col'>
          {visibleForm || (
            <button className='btn btn-primary my-2' onClick={handleOpenForm}>
              Nuevo Usuario
            </button>
          )}

          {users.length === 0 ? (
            <div className='alert alert-warning'>
              No hay usuario en el sistema
            </div>
          ) : (
            <UserList
              initialUser={users}
              handlerRemoveUser={handlerRemoveUser}
              handlerUserSelectedForm={handlerUserSelectedForm}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default UsersApp
