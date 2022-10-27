import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";
import style from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [Id, setId] = useState("");
  const [Address, setAddress] = useState("");
  const [Comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { name, DOB, Address, Comment };
    console.log(obj);
    try {
      const response = axios.post("http://127.0.0.1:8000/dataapi/", obj);
      navigate("/listofpatient");
    } catch (err) {
      console.log(err);
    }
  };
  const homeNvigaterButton = () => {
    navigate("/home");
  };

  return (
    <div>
      {/* popMessage */}
      <Navbar />
      <div className={style.container}>
        <h1 className={style.heading}>Add Patient</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.form}>
            <div className={style.inputGroup}>
              <label className={style.label} for="">
                Patient Full Name
              </label>
              <input
                className={style.input}
                type=""
                name=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={style.inputGroup}>
              <label
                className={style.label}
                // for=""
                placeholder="Optional!! it is assigned auto"
              >
                ID number
              </label>
              <input
                className={style.input}
                type=""
                name=""
                value={Id}
                placeholder="Optional!!! it is assinged auto"
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className={style.inputGroup}>
              <label className={style.label} for="">
                Date of birth
              </label>
              <input
                className={style.input}
                type=""
                name=""
                value={DOB}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
            <div className={style.inputGroup}>
              <label className={style.label} for="">
                Address
              </label>
              <input
                className={style.input}
                type=""
                name=""
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className={style.inputGroup}>
              <label className={style.label} for="">
                Comment
              </label>
              <input
                className={style.input}
                type=""
                name=""
                value={Comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className={style.inputGroup}></div>
          </div>
          <div className={style.buttonGroup}>
            {/* <Link to="/listofpatient"> */}
            <button className={style.button1} type="submit">
              ADD
            </button>
            {/* </Link> */}
            <Link to="/managepatient">
              <button className={style.button1}>Back</button>
            </Link>
            <button onClick={homeNvigaterButton} className={style.button1}>
              Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddPatient;
