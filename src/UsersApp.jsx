import { useReducer } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { usersReducer } from "./reducers/usersReducer";

// Son los usuarios que aparecen en el formulario
const initialUser = [
  {
    id: 1,
    username: "Nicolas",
    password: "12345",
    email: "niko_mamani@hotmail.com",
  },
  {
    id: 2,
    username: "Martin",
    password: "12322",
    email: "martin_mamani@hotmail.com",
  },
];
const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUser);
  const handlerUser = (user) => {
    // console.log(users);
    dispatch({
      type: "addUser",
      payload: user,
    });
  };

  const handlerRemoveUser = (id) => {
    dispatch({
      type: "removeUser",
      payload: id,
    });
  };

  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm handlerUser={handlerUser} />
        </div>
        <div className="col">
          <UserList initialUser={users} handlerRemoveUser={handlerRemoveUser} />
        </div>
      </div>
    </div>
  );
};

export default UsersApp;
