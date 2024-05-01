import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  const [auth,setAuth] = useState(localStorage.getItem('auth_status'))
  return (
    <>
      <Home authStatus={{auth, setAuth}}/>
      <Router>
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/stdhome" exact element={<StudentHome />} />
          <Route path="/stdlogin" element={<StudentLogin />} />
          <Route path="/stdsignup" element={<StudentSignup />} />
          <Route path="/ownerlogin" element={<OwnerLogin />} />
          <Route path="/ownersignup" element={<OwnerSignup />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/ownerhome" element={<OwnerHome />} />
          <Route path="/addhostel" element={<AddHostel />} />
          <Route path="/updatehostels" element={<UpdateHostel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

