import { Link } from "react-router-dom";

function About() {
  return (
    <div style={{ width: "60%", margin: "auto", paddingTop: "30px" }}>
      <h1>👤 About Me</h1>
      

      <div style={{ marginBottom: "20px" }}>
        <Link to="/">
          <button style={{ padding: "10px 20px" }}>Home</button>
        </Link>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td>Manicka Vasagan</td>
          </tr>
          <tr>
            <td><strong>Course</strong></td>
            <td>Full Stack Developer</td>
          </tr>
          <tr>
            <td><strong>Objective</strong></td>
            <td>
              My objective is to become a skilled full-stack engineer and build meaningful applications that help people and solve real-world problems.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
