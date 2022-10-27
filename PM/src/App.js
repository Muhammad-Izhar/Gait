import Login from "./Components/Login";
import ManagePatient from "./Components/ManagePatient";
import AddPatient from "./Components/AddPatient";
import EditPatient from "./Components/EditPatient";
import Home from "./Components/Home";
import ListOfPatient from "./Components/ListOfPatient";
import ListOfRecording from "./Components/ListOfRecording";
import Session from "./Components/Session";
import { useState } from "react";
// React Router import
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./Components/RegisterUser";
import Bacdrop from "./Components/UImodals/Backdrop";
import Modal from "./Components/UImodals/Modal";
import ForgotPassword from "./Components/Login/ForgotPassword/index";

function App() {
  const [isModal, setIsModal] = useState(false);

  const modalhandler = (modalData) => {
    setIsModal(modalData);
  };

  const onCloseModal = () => {
    setIsModal(false);
  };

  return (
    <>
      {isModal && <Bacdrop onClose={onCloseModal} />}
      {isModal && <Modal onClose={onCloseModal} />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<RegisterUser onAddModal={modalhandler} />} />

        <Route path="managepatient" element={<ManagePatient />} />
        <Route path="addpatient" element={<AddPatient />} />
        <Route path="editpatient" element={<EditPatient />} />
        <Route path="home" element={<Home />} />
        <Route path="listofpatient" element={<ListOfPatient />} />
        <Route path="listofrecording" element={<ListOfRecording />} />
        <Route path="session" element={<Session />} />
      </Routes>
    </>
  );
}

export default App;
