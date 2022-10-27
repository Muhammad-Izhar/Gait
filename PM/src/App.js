import Login from "./Components/Login";
import ManagePatient from "./Components/ManagePatient";
import AddPatient from "./Components/AddPatient";
import EditPatient from "./Components/EditPatient";
import Home from "./Components/Home";
import ListOfPatient from "./Components/ListOfPatient";
import ListOfRecording from "./Components/ListOfRecording";
import Session from "./Components/Session";

// React Router import
import { Routes, Route } from "react-router-dom";
import RegisterUser from "./Components/RegisterUser";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<RegisterUser />} />

      <Route path="managepatient" element={<ManagePatient />} />
      <Route path="addpatient" element={<AddPatient />} />
      <Route path="editpatient" element={<EditPatient />} />
      <Route path="home" element={<Home />} />
      <Route path="listofpatient" element={<ListOfPatient />} />
      <Route path="listofrecording" element={<ListOfRecording />} />
      <Route path="session" element={<Session />} />
    </Routes>
  );
}

export default App;
