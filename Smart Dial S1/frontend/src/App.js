import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import AdminLogin from "./pages/AdminLogin";
import RegisterEmployee from "./pages/RegisterEmployee";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import EmployeeLogin from "./pages/EmployeeLogin";
import WelcomeScreen from "./pages/WelcomeScreen";
import AdminHome from "./pages/AdminHome";


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<WelcomeScreen />} />
            <Route path="/loginAdm" element={<AdminLogin />} />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/loginEmp" element={<EmployeeLogin />} />
            <Route path="/registerEmp" element={<RegisterEmployee />} />
          </Routes>
        </div>
      </Router>
      {/* <h2>prefer power over money</h2> */}
      <ToastContainer/>
    </>
  );
}

export default App;
