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
      <SetPopupContext.Provider value={{ popup, setPopup }}>
        <div>
          <Navbar />
        </div>
        <Routes>
        <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
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
