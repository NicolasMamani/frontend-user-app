import { useState } from "react";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};

const UserForm = ({ handlerUser }) => {
  const [userForm, setUserForm] = useState(initialUserForm);
  const { username, password, email } = userForm;

  const onInputChange = ({ target }) => {
    //console.log(target.value);
    const { name, value } = target;
    setUserForm({ ...userForm, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userForm);

    //Manejamos que el nombre, contraseña y email no sean vacios
    if (!username || !password || !email) {
      alert("debe completar los campos del formulario");
    }

    //Guardar el user form en el listado de usuarios
    handlerUser(userForm);
    setUserForm(initialUserForm);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Password"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};

export default UserForm;
