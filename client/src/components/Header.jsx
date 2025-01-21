import { useLocation } from "react-router-dom";

function BasicExample({setauthToken}) {

  const location=useLocation();
  const hideLogOut=location.pathname==='/login'||location.pathname==='/signup';

  async function handleLogOut()
  {
    localStorage.removeItem('token');
    setauthToken('');
  }

    return (
      <>
        <div className="navbar w-screen font-bold font-serif h-16  bg-slate-700 text-stone-100 flex">
            <div className='pl-8 text-3xl'>URL Shortner</div>
            {!hideLogOut&&(
            <button className="bg-gray-800 rounded-3xl hover:bg-slate-500 active:bg-zinc-800 mr-3 w-24 h-9" onClick={handleLogOut}>Log Out</button>)}
        </div>
      </>
    );
  }
  
  export default BasicExample;