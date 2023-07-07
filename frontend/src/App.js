import Welcome from "./componeent/Welcome/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route exact path="/" Component={Welcome}>        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
