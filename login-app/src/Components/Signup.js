
import axios from 'axios';
import React from 'react';
import { useState } from 'react';



const Signup = () => {

  const [data,setData]=useState({})

function Upload(e){
  const {name,value}=e.target

  setData({
    ...data,
    [name]:value
  })
}
console.log(data);

function Mydata(){
  axios.post("http://localhost:4000/p",data).then((e)=>console.log(e))
}
  return (
    <div>
      <input name='email' onChange={Upload} />
      <input name='password' onChange={Upload} />
      <input name='name' onChange={Upload}/>
      <input name='age' onChange={Upload}/>
      <button onClick={Mydata}>click</button>
    </div>
  )
}

export default Signup;




