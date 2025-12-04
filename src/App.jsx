import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UpdatePage from "./UpdatePage";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    department: "",
    schooling: "",
    tenthPercentage: "",
    twelfthPercentage: ""
  });

  return (
    <Router>
      <div >
        <center>
          <header>
            <h1>Personal Details Management System</h1>
          </header>
        </center>

        <Routes>
          <Route 
            path="/" 
            element={<HomePage formData={formData} setFormData={setFormData} />} 
            
          />
          <Route 
            path="/about" 
            element={<AboutPage formData={formData} />} 
          />
          <Route 
            path="/update" 
            element={<UpdatePage formData={formData} setFormData={setFormData} />} 
          />
        </Routes>

        <center>
          <footer>
            <p>Developed by Manicka Vasagan I IT 231042</p>
            p
          </footer>
        </center>
      </div>
    </Router>
  );
}

export default App;
