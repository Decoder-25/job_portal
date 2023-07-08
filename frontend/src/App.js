import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./componeent/Signup/Signup";
import Welcome, { ErrorPage } from "./componeent/Welcome/Welcome";
import MessagePopup from "./lib/MessagePopup";
import Login from "./componeent/Login/Login";
import Navbar from "./componeent/Navbar/Navbar";

export const SetPopupContext = createContext();

function App() {

  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  
  return (
    <BrowserRouter >
      <SetPopupContext.Provider value={setPopup}>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" Component={Welcome}></Route>
          <Route exact path="/signup" Component={Signup}></Route>
          <Route exact path="/login" Component={Login}></Route>
        </Routes>
        <MessagePopup 
          open={popup.open}
          setOpen={(status) =>
            setPopup({
              ...popup,
              open: status,
            })
          }
        />
      </SetPopupContext.Provider>
    </BrowserRouter>
  );
}

export default App;
