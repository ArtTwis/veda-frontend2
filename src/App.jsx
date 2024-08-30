import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "./context/UserContext.js";

function App() {
  const [userInfo, setUserInfo] = useState({
    userName: "Dummy Name",
    userEmail: "dummy@example.com",
  });

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      <div className="App">
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
