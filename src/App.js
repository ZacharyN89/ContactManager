import React from 'react';
import './App.css';
import LoginPage from './components/loginPage.component';
import RegisterPage from './components/registerPage.component';
import WorkoutPage from './components/workoutPage.component';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LoginPage/>}></Route>
          <Route path = "/register" element = {<RegisterPage/>}></Route>
          <Route path = "/workout" element = {<WorkoutPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
