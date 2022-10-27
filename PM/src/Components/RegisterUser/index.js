import React from "react";
// import { ReactDOM } from "react";

import ReactDOM from "react-dom";
import Navbar from "../Common/Navbar";
import style from "./style";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const RegisterUser = () => {
  const [classAdd, setClassAdd] = useState(null);
  const [isBackdrop, setIsBackdrop] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPass = useRef();
  const country = useRef();
  const hospital = useRef();
  const navigate = useNavigate();
  const register = "Register";
  const backdropClikHandler = () => {
    setIsBackdrop(false);
    setIsModal(false);
  };
  //   const acknowlodge = (e) => {
  //     e.preventDefault;
  //     alert("register successfully");
  //     navigate("/login");
  //   };
  const submitHandler = (event) => {
    event.preventDefault();
    const userAcknoledgement = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      conf_pass: confirmPass.current.value,
      country: country.current.value,
      hospital: hospital.current.value,
    };
    if (
      userAcknoledgement.password.trim() !== userAcknoledgement.conf_pass.trim()
    ) {
      setClassAdd(style.warrning);
      setIsModal(true);
      setIsBackdrop(true);

      return;
    }
    console.log(userAcknoledgement);
    alert("register successfully!");
    navigate("/login");
  };

  const Bacdrop = () => {
    return ReactDOM.createPortal(
      <div className={style.backdrop} />,
      document.getElementById("overlay")
    );
  };
  const Modal = (props) => {
    return ReactDOM.createPortal(
      <div className={style.modal}>{props.children}</div>,
      document.getElementById("modal")
    );
  };
  return (
    <>
      {isBackdrop && <Bacdrop onClik={backdropClikHandler} />}

      {isModal && (
        <Modal>
          <h1 className={style.heading}>Oops!</h1>
          <div>Password are not matching.</div>
          <button className={style.modalBtn} onClik={backdropClikHandler}>
            Ok
          </button>
        </Modal>
      )}
      <Navbar text={register} />
      <div className={style.main}>
        <form className={style.container} onSubmit={submitHandler}>
          <div className={style.continput}>
            <div className={style.firstinputdiv}>
              <label htmlFor="name" className={style.label}>
                Name
              </label>
              <input
                ref={name}
                type="text"
                name="name"
                id="name"
                className={style.input}
                required
              />
            </div>

            <div className={style.firstinputdiv}>
              <label htmlFor="email" className={style.label}>
                Email
              </label>
              <input
                ref={email}
                type="email"
                name="email"
                id="email"
                className={style.input}
                required
              />
            </div>
            <div className={style.firstinputdiv}>
              <label htmlFor="password" className={style.label}>
                Password
              </label>
              <input
                ref={password}
                type="password"
                name="password"
                id="password"
                className={classAdd ? style.warrning : style.input}
                required
              />
            </div>
          </div>
          <div className={style.continput}>
            <div className={style.firstinputdiv}>
              <label htmlFor="confirmpassword" className={style.label}>
                Confirm Password
              </label>
              <input
                ref={confirmPass}
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                className={classAdd ? style.warrning : style.input}
                required
              />
            </div>
            {/* <div className={style.firstinputdiv}>
              <label htmlFor="hospitalname" className={style.label}>
                Hospital Name
              </label>
              <input
                ref={hospital}
                type="text"
                name="hospitalname"
                id="hospitalname"
                className={style.input}
                required
              />
            </div> */}
            {/* <div className={style.firstinputdiv}>
              <label htmlFor="countryname" className={style.label}>
                Country Name
              </label>
              <input
                ref={country}
                type="text"
                name="countryname"
                id="countryname"
                className={style.input}
                required
              />
            </div> */}
            
          </div>
          <div className={style.buttondiv}>
            <button className={style.button}>Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterUser;
