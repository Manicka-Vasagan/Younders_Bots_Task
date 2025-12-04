import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function UpdatePage({ formData, setFormData }) {
  const navigate = useNavigate();
  
  const [updateFormData, setUpdateFormData] = useState({
    name: formData.name || "",
    age: formData.age || "",
    email: formData.email || "",
    department: formData.department || "",
    schooling: formData.schooling || "",
    tenthPercentage: formData.tenthPercentage || "",
    twelfthPercentage: formData.twelfthPercentage || ""
  });

  function handleChange(e) {
    setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
  }

  function handleUpdate(e) {
    e.preventDefault();
    setFormData(updateFormData);
    alert("Form Updated Successfully!");
    navigate("/"); 
  }

  return (
    <center>
      <div>
        <h2>Update Personal Details</h2>
      <p>Update your information below. The form is pre-filled with your previous data.</p>
      
      <form onSubmit={handleUpdate}>
        <table border="1" cellPadding="10" cellSpacing="0">
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>
                <input 
                  type="text"
                  name="name"
                  value={updateFormData.name}
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
                  value={updateFormData.age}
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
                  value={updateFormData.email}
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
                  value={updateFormData.department}
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
                  value={updateFormData.schooling}
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
                  value={updateFormData.tenthPercentage}
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
                  value={updateFormData.twelfthPercentage}
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
        <button type="submit">Update Details</button>

        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
      </form>

      {/* Show current data */}
      {formData.name && (
        <div>
          <h3>Current Saved Data:</h3>
          <ul>
            <li><strong>Name:</strong> {formData.name}</li>
            <li><strong>Age:</strong> {formData.age}</li>
            <li><strong>Email:</strong> {formData.email}</li>
            <li><strong>Department:</strong> {formData.department}</li>
            <li><strong>School:</strong> {formData.schooling}</li>
            <li><strong>10th:</strong> {formData.tenthPercentage}%</li>
            <li><strong>12th:</strong> {formData.twelfthPercentage}%</li>
          </ul>
        </div>
      )}
      </div>
    </center>
  );
}

export default UpdatePage;