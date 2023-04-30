import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { addUser } from "../redux/userReducer";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name && !email) {
      return alert("Please Enter User Info to Continue");
    }
    dispatch(addUser({ name, email, id: users[users.length - 1].id + 1 }));
    navigate("/");
  };

  return (
    <div className="p-3">
      <h1 className="text-center">Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to={"/"} className="ms-3 btn btn-secondary">
          Back to Home
        </Link>
      </form>
    </div>
  );
};

export default Create;
