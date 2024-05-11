import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentHome from "./pages/StudentHome";
import StudentLogin from "./pages/login/StudentLogin";
import StudentSignup from "./pages/signup/StudentSignup";
import { Hero } from "./components/Hero";
import { OwnerLogin } from "./pages/login/OwnerLogin";
import OwnerSignup from "./pages/signup/OwnerSignup";
import { AdminLogin } from "./pages/login/AdminLogin";
import OwnerHome from "./pages/OwnerHome";
import AddHostel from "./pages/AddHostel";
import UpdateHostel from "./pages/UpdateHostel";
import { authContext, hostelContext } from "./context";
import HostelView from "./pages/HostelView";
import AdminHome from "./pages/AdminHome";
function App() {
  const [auth, setAuth] = useState({ auth_status: false, user: {} });
  const auth_status = JSON.parse(localStorage.getItem("auth_status"));
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (auth_status === true) {
      setAuth({ auth_status: true, user });
    } else {
      setAuth({ auth_status: false, user: null });
    }
  }, []);
  return (
    <>
      <authContext.Provider value={{ auth, setAuth }}>
        <Router>
          <Home />
          <div
            style={{
              padding: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "-webkit-fill-available",
            }}
          >
            <Routes>
              <Route path="/" exact element={<Hero />} />

              <Route path="/stdhome" exact element={<StudentHome />} />
              <Route path="/viewhostel/:Id" element={<HostelView />} />
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/stdlogin" element={<StudentLogin />} />
              <Route path="/stdsignup" element={<StudentSignup />} />
              <Route path="/ownerlogin" element={<OwnerLogin />} />
              <Route path="/ownersignup" element={<OwnerSignup />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/ownerhome" element={<OwnerHome />} />
              <Route path="/addhostel" element={<AddHostel />} />
              <Route path="/updatehostels" element={<UpdateHostel />} />
            </Routes>
          </div>
        </Router>
      </authContext.Provider>
    </>
  );
}

export default App;
