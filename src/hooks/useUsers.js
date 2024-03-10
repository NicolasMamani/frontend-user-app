import { useReducer, useState } from 'react'
import { usersReducer } from '../reducers/usersReducer'
import Swal from 'sweetalert2'
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
export const useUsers = () => {
  // Esto es para eliminar y guardar
  const [users, dispatch] = useReducer(usersReducer, initialUser)
  // Esto es para seleccionar al usuario cuando le damos update
  const [userSelected, setUserSelected] = useState(initialUser)
  const [visibleForm, setVisibleForm] = useState(false)

  const handlerUser = user => {
    if (user.id === undefined) {
      user.id = 0
    }
    if (user.id === 0) {
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
    Swal.fire(
      user.id === 0 ? 'Usuario Credo' : 'Usuario Actualizado',
      user.id === 0
        ? 'El usuario ha sido creado con éxito'
        : 'El usuario ha sido actualizado con éxito',
      'success',
    )
    setVisibleForm(false)
    setUserSelected(initialUserForm)
  }

  const handlerRemoveUser = id => {
    Swal.fire({
      title: 'Estas seguro de que quieres eliminar el usuario?',
      text: 'Esta acción no se podra revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch({
          type: 'removeUser',
          payload: id,
        })
        Swal.fire('Eliminado!', 'El usuario ha sido eliminado', 'success')
      }
    })
  }

  const handlerUserSelectedForm = user => {
    setUserSelected({ ...user })
    setVisibleForm(true)
  }
  const handleOpenForm = () => {
    setVisibleForm(true)
  }

  const handleCloseForm = () => {
    setVisibleForm(false)
    setUserSelected(initialUserForm)
  }
  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handleOpenForm,
    handleCloseForm,
  } // con esto hacemos referencia a que se devuelve un objeto
}
