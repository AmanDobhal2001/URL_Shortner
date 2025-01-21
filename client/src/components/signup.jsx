import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link, useNavigate} from 'react-router-dom';

function signup() {
    const navigate=useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){

        e.preventDefault();
        const id=uuidv4();

        const options={
            method:'POST',

            headers:{
                'Content-Type':'application/json'
            },

            body:JSON.stringify({
                "id":id,
                "name":name,
                "email":email,
                "password":password
            })

        }

        try{
            const response=await fetch('api/signup',options);

            const data=await response.json();

            if(data.error)
            {
                if(Array.isArray(data.error))
                {
                    await data.error.forEach((item)=>alert(item.msg));
                }
                
                else
                {
                    alert(data.error);
                }
                return;
            }

            console.log(data.message);
        }

        catch(error)
        {
            console.log("Internal server error from frontend",error);
        }
        
        navigate('/')
    }
    
    return (
        <div className="flex items-center text-black justify-center pt-24 pb-14  bg-gray-300">
          <form
            className="bg-white p-8 rounded shadow-md w-96"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email1" className="block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password1"
                className="block text-gray-700 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account? <Link to="/login" className="text-blue-600">LogIn</Link>
            </p>
          </form>
        </div>
      );
}

export default signup;