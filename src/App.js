import Home from "./components/Home";
import Login from "./components/Login";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Display from "./components/Display";


function App() {
  return (
    <div > 
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/display" element={<Display/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
