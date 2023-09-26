import React, { useState } from 'react';
import axiosClient from '../axiosClient';
import { useNavigate } from 'react-router-dom';

export default function Create() {

    const navigate = useNavigate();
    const [value, setValue] = useState({
        fullname: '',
        email: '',
        contact: '',
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axiosClient.post('/create', value);
            setValue(res.data);
            navigate('/home');
        }
        catch (error) {
            console.log(error);
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='fullname'>Full Name</label>
            <input type='text' required="required" onChange={e => setValue({...value, fullname: e.target.value})} placeholder='Full name....' />
            <label htmlFor='email'>Email Address</label>
            <input type='email' required="required" onChange={e => setValue({...value, email: e.target.value})} placeholder='Email....' />
            <label htmlFor='contact'>Contact Number</label>
            <input type='tel' required="required" onChange={e => setValue({...value, contact: e.target.value})} placeholder='Contact....' />
            <button type='submit'>Create Data</button>
        </form>
    </div>
  )
}
