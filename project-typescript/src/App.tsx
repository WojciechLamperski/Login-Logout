import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./components/styles/Global.styles";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const newUser: any = localStorage.getItem("user");
      const newNewUSer: any = JSON.parse(newUser).name;

      setUser(newNewUSer);
    }
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, [user]);

  function logout(): any {
    localStorage.clear();
    setUser(null);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar user={user} logout={logout} />
      <div className="content">
        <Routes>
          <Route path="home" element={<Home user={user} />} />
          <Route
            path="login"
            element={
              <Login
                setUser={setUser}
                login={login}
                password={password}
                setLogin={setLogin}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
