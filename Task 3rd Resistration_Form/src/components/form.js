import React from 'react'
import './form.css';

export default function Form() {
  return (
    <>
  <h1>Student Enrollment System</h1>
  <div className="container centre">
    <table>
      <tbody>
        <tr>
          <td>
            <form
              className="input-part"
              autoComplete="off"
              onsubmit="onFormSubmit()"
            >
              <div>
                <label htmlFor="studentName">Student Name</label>
                <input
                  type="text"
                  placeholder="Enter Student Name"
                  name="studentName"
                  id="studentName"
                />
              </div>
              <div>
                <label htmlFor="collegeName">College Name</label>
                <input
                  placeholder="Enter College Name"
                  type="text"
                  name="collegeName"
                  id="collegeName"
                />
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input
                  placeholder="Enter The Email"
                  type="text"
                  name="Email"
                  id="Email"
                />
              </div>
              <div>
                <label htmlFor="Gender">Gender</label>
                <input
                  placeholder="Enter the Gender"
                  type="text"
                  name="Gender"
                  id="Gender"
                />
              </div>
              <div>
                <label htmlFor="Skills">Skills</label>
                <input
                  placeholder="Skills"
                  type="text"
                  name="Skills"
                  id="Skills"
                />
              </div>
              <div className="form-btns">
                <input type="submit" defaultValue="Submit" />
                <input type="reset" defaultValue="Reset" />
              </div>
            </form>
          </td>
          <td>
            <table className="list" id="storeList">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>College Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</>

  )
}

