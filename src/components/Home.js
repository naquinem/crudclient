import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../axiosClient';

export default function Home() {
  const [value, setValue] = useState([]);
  const id = useParams();
  useEffect(() => {
    axiosClient.get('/read')
    .then((response) => {
      setValue(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);


  return (
    <div>
      <button type='submit'><Link to="/create">Increment Data</Link></button>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {value.map((info, key) => {
            return (
              <tr key={key}>
                <td>{info.fullname}</td>
                <td>{info.email}</td>
                <td>{info.contact}</td>
                <td><button type='submit'><Link to={`/read/${info.id}`}>Info</Link></button>
                  <button type='submit'><Link to={`/update/${info.id}`}>Update Data</Link></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
