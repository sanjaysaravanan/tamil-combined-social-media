import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userRegister } from "../api.js";

const initialState = {
  email: "",
  name: "",
  dob: "",
  image: "",
  password: "",
  description: "",
};

const RegisterForm = () => {
  const [formState, setState] = useState(initialState);

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here, like sending the form data to your backend
    await userRegister(formState);
    setState(initialState);
    navigate("/login");
  };

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                name="image"
                onChange={handleChange}
                value={formState.image}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={formState.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formState.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <Link to="/login" style={{ float: "right" }}>
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
