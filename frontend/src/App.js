import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./componeent/Signup/Signup";
import Welcome, { ErrorPage } from "./componeent/Welcome/Welcome";
import MessagePopup from "./lib/MessagePopup";
import Login from "./componeent/Login/Login";
import Navbar from "./componeent/Navbar/Navbar";
import Application from "./componeent/Application/Application";
import Profile_ami from "./componeent/Profile_ami/Profile_ami";

export const SetPopupContext = createContext();

function App() {

  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });
  
  return (
    <BrowserRouter >
      <SetPopupContext.Provider value={{ popup, setPopup }}>
        <div>
          {/* <Navbar /> */}
        </div>
        <Routes>
        {/* <Route exact path="/" Component={Welcome} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/login" Component={Login} /> */}
          {/* <Route exact path="/" Component={Application}/> */}
          <Route exact path="/" Component={Profile_ami}/>
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
