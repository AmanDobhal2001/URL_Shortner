import React from 'react'
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';

function login({setauthToken}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate=useNavigate();

    async function handleSubmit(e){

        e.preventDefault();

        const options={
            method:'POST',

            headers:{
                'Content-Type':'application/json'
            },

            body:JSON.stringify({
                "email":email,
                "password":password
            })

        }

        try{
            const response=await fetch('/api/login',options);

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

            console.log(data.token);
            localStorage.setItem("token",data.token);
            setauthToken(data.token);

        }

        catch(error)
        {
            console.log("Internal server error from frontend",error);
        }

    }
    
    return (
        <div className="flex items-center text-black justify-center pt-40 pb-20 bg-gray-300">
          <form
            className="bg-white p-8 rounded shadow-md w-96"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded mt-1"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
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
              Login
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
            </p>
          </form>
        </div>
      );
}

export default login;
