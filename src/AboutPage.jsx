import { Link } from "react-router-dom";
import profile from "./assets/profile/profile.jpg";
function AboutPage({ formData }) {
  const defaultData = {
    name: "Your Name",
    age: "Your Age",
    email: "your.email@example.com",
    department: "Your Department",
    schooling: "Your School",
    tenthPercentage: "0",
    twelfthPercentage: "0"
  };

  const profileData = formData.name ? formData : defaultData;

  return (
    <center>
      <div>
        <h2>About Me</h2>

      <div>
       <img 
  src={profile} 
  alt="profile"
  style={{
    width: "150px",
    height: "150px",
     borderRadius: "50%",
    objectFit: "cover"
   
  }}
/>

        <h2>{profileData.name}</h2>

       
        <p>
          <em>{profileData.age} years old | {profileData.department} | {profileData.email}</em>
        </p>

        <div>
          <h3>About Me</h3>
          <p>
            Hello! I'm {profileData.name}, a passionate and dedicated individual currently pursuing my career in {profileData.department}. 
            I completed my schooling at vimal matriculation higher</p>
        </div>
      </div>

      {/* Details Section */}
      <div>
        <h3>My Details</h3>
        
        <table border="1" cellPadding="10" cellSpacing="0">
          <tbody>
            <tr>
              <td><strong>Name</strong></td>
              <td>{profileData.name}</td>
            </tr>
            <tr>
              <td><strong>Age</strong></td>
              <td>{profileData.age} years</td>
            </tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>{profileData.email}</td>
            </tr>
            <tr>
              <td><strong>Department</strong></td>
              <td>{profileData.department}</td>
            </tr>
            <tr>
              <td><strong>Schooling</strong></td>
              <td>{profileData.schooling}</td>
            </tr>
            <tr>
              <td><strong>10th Grade Score</strong></td>
              <td>{profileData.tenthPercentage}%</td>
            </tr>
            <tr>
              <td><strong>12th Grade Score</strong></td>
              <td>{profileData.twelfthPercentage}%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Navigation Button */}
      <br />
      <Link to="/">
        <button>← Back to Home Page</button>
      </Link>
      </div>
    </center>
  );
}

export default AboutPage;

