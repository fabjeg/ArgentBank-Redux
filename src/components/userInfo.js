import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getUser, updateUser } from "../actions/get.action";
import "../styles/main.min.css";

export function UserInfo() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const [username, setUsername] = useState(userInfo.userName || "");
  const [initialUsername, setInitialUsername] = useState(
    userInfo.userName || ""
  );

  useEffect(() => {
    setUsername(userInfo.userName || "");
    setInitialUsername(userInfo.userName || "");
  }, [userInfo]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (username !== initialUsername) {
      dispatch(updateUser(username));
      setInitialUsername(username);
    }
  };

  const handleDelete = () => {
    setUsername("");
    setInitialUsername("");
    dispatch(updateUser(""));
  };

  return (
    <div className="container-form anim-form">
      <h2>Edit user info</h2>
      <form onSubmit={handleSave}>
        <label>
          User name:
          <input
            className="input-form-user"
            type="text"
            value={username || ""}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          First name:
          <input
            className="input-form-user"
            type="text"
            value={userInfo.firstName || ""}
            readOnly
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            className="input-form-user"
            type="text"
            value={userInfo.lastName || ""}
            readOnly
          />
        </label>
        <br />
        <div className="container-button">
          <button
            className="button-form"
            type="submit"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="button-form"
            type="button"
            onClick={handleDelete}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
