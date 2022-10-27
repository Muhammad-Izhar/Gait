import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../Common/Navbar";
import style from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditPatient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [userInfo, setUserInfo] = useState({
    name: data.name,
    id: data.id,
    DOB: data.DOB,
    Address: data.Address,
    comment: data.Comments,
  });

  const submitData = (e) => {
    e.preventDefault();

    try {
      const response = axios.put("http://127.0.0.1:8000/dataapi/", userInfo);
      navigate("/listofpatient");
    } catch (err) {
      console.log(err);
    }
    alert("Edited redirecting to list of patients");
  };

  return (
    <div>
      <Navbar />
      <div className={style.container}>
        <h1 className={style.heading}>Edit Patient</h1>
        <form className={style.form} onSubmit={submitData}>
          <div className={style.inputGroup}>
            <label className={style.label} htmlFor="name">
              Patient Full Name
            </label>
            <input
              className={style.input}
              type="text"
              name="name"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
          </div>
          <div className={style.inputGroup}>
            <label className={style.label} htmlFor="Id">
              ID number (11 digits)
            </label>
            <input
              className={style.input}
              type="number"
              name="Id"
              value={userInfo.id}
              onChange={(e) => setUserInfo({ ...userInfo, Id: e.target.value })}
            />
          </div>
          <div className={style.inputGroup}>
            <label className={style.label} htmlFor="DOB">
              Date of birth
            </label>
            <input
              className={style.input}
              type="text"
              name="DOB"
              value={userInfo.DOB}
              onChange={(e) =>
                setUserInfo({ ...userInfo, DOB: e.target.value })
              }
            />
          </div>
          <div className={style.inputGroup}>
            <label className={style.label} htmlFor="address">
              Address
            </label>
            <input
              className={style.input}
              type="text"
              name="address"
              value={userInfo.Address}
              onChange={(e) =>
                setUserInfo({ ...userInfo, address: e.target.value })
              }
            />
          </div>
          <div className={style.comment}>
            <label className={style.label} htmlFor="comment">
              Comment
            </label>
            <textarea
              className={style.textarea}
              type="text"
              name="comment"
              value={userInfo.comment}
              onChange={(e) =>
                setUserInfo({ ...userInfo, comment: e.target.value })
              }
              rows={2}
              placeholder="Comment is a Comment"
            />
          </div>
        </form>
        <div className={style.buttonGroup}>
          <Link to="/listofpatient">
            <button className={style.button} onClick={submitData}>
              Edit
            </button>
          </Link>
          <button className={style.button1}>Remove</button>
          <Link to="/listofpatient">
            <button className={style.button}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EditPatient;
