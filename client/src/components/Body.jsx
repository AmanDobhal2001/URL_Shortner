import React from 'react';
import { useState } from 'react';


function Body() {
  const [first, setFirst] = useState('http://www.example.com');
  const [url, seturl] = useState('')

  async function handleSubmit(e){

    if(e.key==="Enter")
    {
      e.preventDefault();
      await getData();
    }

  }

  async function handleCopy(e){

    navigator.clipboard.writeText(url);

  }
  
  async function handleChange(e){
  
    setFirst(e.target.value);
    console.log(first);
  
  }

  async function getData(){

    try{
      const options={
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
    },
      body:JSON.stringify({url:first})
    }

    const response=await fetch('/api',options);
    const data=await response.json();
    const val="http://localhost:5000/"+data.shortId;
    seturl(val);
    console.log(data);
  }
    catch(error)
    {
      console.log("error agya re babua",error);
    }

}

  return (
    <>
    <div className='w-4/6 flex flex-row h-40 items-center mt-36 mx-auto font-serif justify-center border-2 bg-gray-700 border-zinc-300 rounded-3xl'>
      <form className='flex text-lg'>
        <div className='text-2xl'>Enter your URL</div>
        <input type="text" className="border-1 rounded-lg ml-5 pl-4 w-72 h-8 bg-neutral-500 from-neutral-200" onChange={handleChange} placeholder={first} onKeyDown={handleSubmit}/>
      </form>
    </div>

    {url ?(
      <div>

        <div className='w-4/6 flex flex-row h-24 items-center mt-11 mx-auto font-serif text-3xl justify-center border-2 bg-slate-400 border-zinc-300 rounded-3xl'>
        <a href={url} target='_blank'>{url}</a>
      </div>

      <button className='m-auto bg-blue-700 w-20 hover:bg-slate-800 active:bg-stone-700 h-9 block rounded-xl mt-3' onClick={handleCopy}>Copy</button>
  </div>
):""}
  </>
  )
}

export default Body
