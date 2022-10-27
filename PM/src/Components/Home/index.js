import { Link } from "react-router-dom";
import Navbar from "../Common/Navbar";
import style from "./style";
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={style.container}>
                <h1 className={style.heading}>Home</h1>
                <div className={style.buttonContainer}>
                    <Link to='/managepatient'>
                        <button className={style.button}>
                            Manage Patient
                        </button>
                    </Link>
                    <Link to='/session'>
                        <button className={style.button}>
                            Manage Session
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Home;