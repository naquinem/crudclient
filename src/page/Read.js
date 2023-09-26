import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';


export default function Read() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [info, setInfo] = useState([]);
    useEffect(() => {
        axiosClient.get('/info/'+id)
        .then((response) => {
            setInfo(response.data[0]);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);
    const handleDelete = (e) => {
        e.preventDefault();
        axiosClient.delete('/delete/'+id)
        .then((response) => {
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
      }
  return (
    <div>
        <div>
            <h1>Details</h1>
            <h2>{info.id}</h2>
            <h2>{info.fullname}</h2>
            <h2>{info.email}</h2>
            <h2>{info.contact}</h2>
            <Link to={`/read/${info.id}`}>Info</Link>
            <Link to={`/update/${info.id}`}>Update Data</Link>
            <button type='submit' onClick={handleDelete}>Delete Data</button>
        </div>
    </div>
  )
}
