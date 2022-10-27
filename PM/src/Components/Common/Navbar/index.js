import style from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = (props) => {
  const [name, setName] = useState("Doctor Methieu");
  return (
    <div className={style.container}>
      <div className={style.contmain}>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/002/181/615/original/medical-doctor-general-practitioner-physician-profile-avatar-cartoon-vector.jpg"
            alt="profile"
            className={style.image}
          />
        </div>
        <div>
          <GiHamburgerMenu color="white" />
        </div>
        <div className={style.doctorName}>
          <h1>Welcome {props.text ? "" : name}</h1>
        </div>
      </div>
      {props.text && <div className={style.parargister}>{props.text}</div>}
    </div>
  );
};
export default Navbar;
