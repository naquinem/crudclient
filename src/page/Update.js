import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosClient from '../axiosClient';

export default function Update() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [info, setInfo] = useState({
        fullname: '',
        email: '',
        contact: '',
    });
    useEffect(() => {
        axiosClient.get('/info/'+id)
        .then((response) => {
            setInfo({...info, fullname: response.data[0].fullname, email: response.data[0].email, contact: response.data[0].contact});
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);
    const handleUpdate = (e) => {
        e.preventDefault();
        axiosClient.put('/update/'+id, info)
        .then((response) => {
            console.log(response);
            navigate('/')
        })
        .catch((error) => {
            console.log(error);
        })
    }
  return (
    <div>
        <form onSubmit={handleUpdate}>
            <label htmlFor='fullname'>Full Name</label>
            <input type='text' value={info.fullname} onChange={e => setInfo({...info, fullname: e.target.value})}   />
            <label htmlFor='email'>Email</label>
            <input type='email' value={info.email} onChange={e => setInfo({...info, email: e.target.value})}   />
            <label htmlFor='contact'>Contact Number</label>
            <input type='tel' value={info.contact} onChange={e => setInfo({...info, contact: e.target.value})}   />
            <button type='submit'>Create Data</button>
        </form>
    </div>
  )
}
