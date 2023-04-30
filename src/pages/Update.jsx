import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateUser } from "../redux/userReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((person) => person.id == id);
  const { name, email } = existingUser[0];

  const [updatedName, setUpdatedName] = useState(name);
  const [updatedEmail, setUpdatedEmail] = useState(email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!updatedName && !updatedEmail) return alert("Info can't be empty");
    dispatch(
      updateUser({
        updatedName,
        updatedEmail,
        id,
      })
    );
    navigate("/");
  };

  return (
    <div className="p-3">
      <h1 className="text-center">Update User Info</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <Link to={"/"} className="ms-3 btn btn-secondary">
          Back to Home
        </Link>
      </form>
    </div>
  );
};

export default Update;
