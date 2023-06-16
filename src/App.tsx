import { Routes, Route } from "react-router-dom";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";
import SignUp from "./views/pages/auth/SignUp";
import NavBar, { DecideNavBarComponent } from "./views/components/Nav";
import LogIn from "./views/pages/auth/LogIn";

const App = (): JSX.Element => {
  return (
    <div className="wrapper">
      <DecideNavBarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;