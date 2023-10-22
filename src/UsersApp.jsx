// TENGO QUE AGREGAR UN USUARIO DOS VECES PARA QUE ANDE

import { useReducer, useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import { usersReducer } from './reducers/usersReducer'

// Son los usuarios que aparecen en el formulario
const initialUser = [
  {
    id: 1,
    username: 'Nicolas',
    password: '12345',
    email: 'niko_mamani@hotmail.com',
  },
  {
    id: 2,
    username: 'Martin',
    password: '12322',
    email: 'martin_mamani@hotmail.com',
  },
]
const initialUserForm = {
  id: 0,
  username: '',
  password: '',
  email: '',
}

const UsersApp = () => {
  // Esto es para eliminar y guardar
  const [users, dispatch] = useReducer(usersReducer, initialUser)
  // Esto es para seleccionar al usuario cuando le damos update
  const [userSelected, setUserSelected] = useState(initialUser)

  const handlerUser = user => {
    if (user.id === undefined) {
      user.id = 0
    }
    if (user.id === 0) {
      console.log('dispach if')
      dispatch({
        type: 'addUser',
        payload: user,
      })
    } else {
      console.log('dispach else')
      console.log(user)
      dispatch({
        type: 'updateUser',
        payload: user,
      })
    }
  }

  const handlerRemoveUser = id => {
    dispatch({
      type: 'removeUser',
      payload: id,
    })
  }

  const handlerUserSelectedForm = user => {
    setUserSelected({ ...user })
  }

  return (
    <div className='container my-4'>
      <h2>Users App</h2>
      <div className='row'>
        <div className='col'>
          <UserForm
            handlerUser={handlerUser}
            initialUserForm={initialUserForm}
            userSelected={userSelected}
          />
        </div>
        <div className='col'>
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
