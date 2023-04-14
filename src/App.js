import React from "react";
import './App.css';
import FrontPage from "./components/frontPage.component";
import OtherPage from "./components/otherPage.component";

// Importing react router dom for routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<FrontPage />}></Route>
          <Route path = "/otherpage" element = {<OtherPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
