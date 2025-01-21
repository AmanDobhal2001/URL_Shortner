import Body from './components/Body'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
import Navbar from './components/Header';

export default function App() {

  const [authToken, setauthToken] = useState('');

  useEffect(() => {
  
    const token=localStorage.getItem('token');

    if(token)
    {
      setauthToken(token);
    }
  }, [])
  

  return (<div className="bg-slate-500 bg-cover bg-center h-screen w-screen opacity-95 text-white">
          <Router>
          <Navbar setauthToken={setauthToken}/>
            <Routes>
              <Route path='/login' element={authToken?<Navigate to='/'/>:<Login setauthToken={setauthToken} />}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/' element={authToken ? <Body setauthToken={setauthToken}/> : <Navigate to='/login' />} />
            </Routes>
          </Router>
    </div>
  )
}