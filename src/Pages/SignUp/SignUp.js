import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
function SignUp() {
  const { registerUser } = useAuth();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onHandleChange = (e) => {
    setemail(e.target.value);
    setError("");
  };

  const handleClick = async () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(emailRegex)) {
      setError("Please enter valid email");
      return;
    } else {
      setError("");
    }
    registerUser(email, password);
    axios
      .post(
        "https://e-commerce-web-app-admin-panel-server-r9gv.vercel.app/signup",
        {
          email,
          password,
        }
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((e) => console.log(e.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile No: </span>
              </label>
              <input
                onChange={(e) => onHandleChange(e)}
                type="text"
                value={email}
                placeholder="email"
                className="input input-bordered"
              />
              {error && (
                <small className="text-error">Please enter BD Number</small>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button onClick={handleClick} className="btn btn-primary">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
