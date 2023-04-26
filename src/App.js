

import './App.css';
import FrontPage from './components/FrontPageLogin.component';
import WorkoutManager from './components/WorkoutManager.component';

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  let token = localStorage.getItem("user");
  if (!token)
  {
    return <FrontPage/>
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<WorkoutManager/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
