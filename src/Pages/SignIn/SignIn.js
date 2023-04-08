import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";

function SignIn() {
  const [loader,setLoader] = useState(false)
  const { signInUser } = useAuth();
  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");
  const [e, setE] = useState();
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
    setLoader(true)
    signInUser(email, password);
    axios
      .post(
        "https://e-commerce-web-app-admin-panel-server-r9gv.vercel.app/login",
        {
          email,
          password,
        }
      )
      .then((res) => {
        console.log(res.response, "res.response");
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((e) => {
        if (e.response.status === 401) {
          setE("register first");
        }
      });
    setLoader(false);
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email: </span>
                </label>
                <input
                  onChange={(e) => onHandleChange(e)}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
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
              {e && <small className="text-error">{e}</small>}
              <div className="form-control mt-6">
                <button onClick={handleClick} className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loader && <Loader/>}
    </>
  );
}

export default SignIn;
