import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import style from "./style";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

function Login() {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  //   let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  // let { loginUser } = useContext(AuthContext);
  // const [userInfo, setUserInfo] = useState({
  //   username: "",
  //   password: "",
  // });

  let loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/home");
    } else {
      alert("Something went wrong!");
    }
  };

  // const LoginToDashboard = async (e) => {
  //   e.preventDefault();
  //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  //   let respone = await fetch("http://127.0.0.1:8000/api/token/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     // credentials: "include",
  //     body: JSON.stringify({
  //       username: userInfo.email,
  //       password: userInfo.password,
  //     }),
  //   });

  //   let data = await respone.json();
  //   console.log(data);
  //   if (respone.status == 200) {
  //     setInfo(data);
  //     setuser(jwtDecode(data.access));
  //     localStorage.setItem("token", JSON.stringify(data));
  //     // navigate("/home")
  //   } else {
  //     // alert("Invalid credentials")
  //   }
  // };

  return (
    <form className={style.container} onSubmit={loginUser}>
      <div className="flex flex-col justify-center items-center space-y-10">
        <h1 className={style.heading}>Sign in</h1>
        <h1 className={style.para}>Sign in and start managing your patients</h1>
      </div>
      {/* inputs for username and password */}
      <div className={style.fieldContainer}>
        <input
          className={style.input}
          type="text"
          placeholder="username"
          name="email"
          id="email"
        />
        <input
          className={style.input}
          type="text"
          placeholder="Password"
          name="password"
          id="password"
        />
      </div>
      {/* remember me checkbox and forgot password link */}
      <div className="flex justify-between items-center w-80 py-3">
        <div className="space-x-2 flex items-center">
          <input
            className={style.checkbox}
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
          />
          <label className={style.rememberMe} htmlFor="rememberMe">
            Remember me
          </label>
        </div>
        <div>
          <a href="/home" className="font-semibold">
            Forgot Password?
          </a>
        </div>
      </div>

      {/* submit button */}
      <div className="w-80">
        {/* <button className={style.button} onClick={loginUser}>
          Login
        </button> */}
        <input className={style.button} type="submit" />
      </div>
      {/* <Link to="/home">
        <button>hey</button>{" "}
      </Link> */}
    </form>
  );
}

export default Login;
