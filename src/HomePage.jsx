import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage({ formData, setFormData }) {
  const [localFormData, setLocalFormData] = useState({
    name: formData.name || "",
    age: formData.age || "",
    email: formData.email || "",
    department: formData.department || "",
    schooling: formData.schooling || "",
    tenthPercentage: formData.tenthPercentage || "",
    twelfthPercentage: formData.twelfthPercentage || ""
  });

  function handleChange(e) {
    setLocalFormData({ ...localFormData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData(localFormData);
    alert("Form Submitted Successfully!");
  }

  return (
    <center>
      <div>
        <h2>Personal Details Form</h2>
        
        <form onSubmit={handleSubmit}>
        <table border="1" cellPadding="10" cellSpacing="0">
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>
                <input 
                  type="text"
                  name="name"
                  value={localFormData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </td>
            </tr>

            <tr>
              <td><strong>Age</strong></td>
              <td>
                <input 
                  type="number"
                  name="age"
                  value={localFormData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  required
                />
              </td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={localFormData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </td>
            </tr>

            <tr>
              <td><strong>Department</strong></td>
              <td>
                <input
                  type="text"
                  name="department"
                  value={localFormData.department}
                  onChange={handleChange}
                  placeholder="Enter your department"
                  required
                />
              </td>
            </tr>

            <tr>
              <td><strong>Schooling</strong></td>
              <td>
                <input
                  type="text"
                  name="schooling"
                  value={localFormData.schooling}
                  onChange={handleChange}
                  placeholder="Enter your school name"
                  required
                />
              </td>
            </tr>

            <tr>
              <td><strong>10th Percentage</strong></td>
              <td>
                <input
                  type="number"
                  name="tenthPercentage"
                  value={localFormData.tenthPercentage}
                  onChange={handleChange}
                  placeholder="Enter your 10th percentage"
                  step="0.01"
                  min="0"
                  max="100"
                  required
                />
              </td>
            </tr>

            <tr>
              <td><strong>12th Percentage</strong></td>
              <td>
                <input
                  type="number"
                  name="twelfthPercentage"
                  value={localFormData.twelfthPercentage}
                  onChange={handleChange}
                  placeholder="Enter your 12th percentage"
                  step="0.01"
                  min="0"
                  max="100"
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <button type="submit">Submit Form</button>
        
        <Link to="/about">
          <button type="button">About Me</button>
        </Link>

        <Link to="/update">
          <button type="button">Update Form</button>
        </Link>
      </form>

      {/* Display submitted data if available */}
      {formData.name && (
        <div>
          <h3>Submitted Details:</h3>
          <table border="1" cellPadding="10" cellSpacing="0">
            <tbody>
              <tr><td><strong>Name:</strong></td><td>{formData.name}</td></tr>
              <tr><td><strong>Age:</strong></td><td>{formData.age}</td></tr>
              <tr><td><strong>Email:</strong></td><td>{formData.email}</td></tr>
              <tr><td><strong>Department:</strong></td><td>{formData.department}</td></tr>
              <tr><td><strong>Schooling:</strong></td><td>{formData.schooling}</td></tr>
              <tr><td><strong>10th Percentage:</strong></td><td>{formData.tenthPercentage}%</td></tr>
              <tr><td><strong>12th Percentage:</strong></td><td>{formData.twelfthPercentage}%</td></tr>
            </tbody>
          </table>
        </div>
      )}
      </div>
    </center>
  );
}

export default HomePage;