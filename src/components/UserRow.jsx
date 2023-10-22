import PropTypes from 'prop-types'

const UserRow = ({
  id,
  username,
  email,
  handlerRemoveUser,
  handlerUserSelectedForm,
}) => {
  const onRemoveUser = id => {
    handlerRemoveUser(id)
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type='button'
          className='btn btn-secondary btn-sm'
          onClick={() =>
            handlerUserSelectedForm({
              id,
              username,
              email,
            })
          }
        >
          Update
        </button>
      </td>
      <td>
        <button
          type='button'
          className='btn btn-danger btn-sm'
          onClick={() => onRemoveUser(id)}
        >
          Remove
        </button>
      </td>
    </tr>
  )
}

// Define las validaciones de PropTypes para las props
UserRow.propTypes = {
  id: PropTypes.number.isRequired, // Ejemplo: id debe ser un número y es requerido
  username: PropTypes.string.isRequired, // username debe ser una cadena (string) y es requerido
  email: PropTypes.string.isRequired, // email debe ser una cadena (string) y es requerido
  handlerRemoveUser: PropTypes.func.isRequired, // handlerRemoveUser debe ser una función y es requerido
}

export default UserRow
