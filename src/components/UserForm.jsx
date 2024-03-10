import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const UserForm = ({
  handlerUser,
  initialUserForm,
  userSelected,
  handleCloseForm,
}) => {
  const [userForm, setUserForm] = useState(initialUserForm)
  const { id, username, password, email } = userForm

  useEffect(() => {
    setUserForm({ ...userSelected, password: '' })
  }, [userSelected])

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    const { name, value } = target
    setUserForm({ ...userForm, [name]: value })
  }

  const onSubmit = event => {
    event.preventDefault()
    // Manejamos que el nombre, contraseña y email no sean vacios
    if (!username || !password || !email) {
      // NO ME ANDA NO ME ANDA NO ME ANDA
      Swal.fire(
        'Error de validación',
        'Debes completar todos los campos',
        'error',
      )
    }

    // Guardar el user form en el listado de usuarios
    handlerUser(userForm)
    setUserForm(initialUserForm)
  }

  const onCloseForm = () => {
    handleCloseForm()
    setUserForm(initialUserForm)
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        className='form-control my-3 w-75'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      {id > 0 || (
        <input
          className='form-control my-3 w-75'
          placeholder='Password'
          type='password'
          name='password'
          value={password}
          onChange={onInputChange}
        />
      )}

      <input
        className='form-control my-3 w-75'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-primary' type='submit'>
        {id > 0 ? 'Editar' : 'Crear'}
      </button>
      <button
        className='btn btn-primary mx-2'
        type='button'
        onClick={handleCloseForm}
      >
        Cerrar
      </button>
    </form>
  )
}

export default UserForm
