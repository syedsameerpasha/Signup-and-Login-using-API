import React,{useState} from 'react';
import axios from 'axios';

const Login = () => {

    const [data,setData]=useState({})

    function Upload(e){
        const {name,value}=e.target

        setData({

            
            ...data,
            [name]:value

        })

    }
    console.log(data);
     async function Mydata(){

         await axios.get("http://localhost:4000/").then((e) => {
       
        console.log(e);

     


        

        
            
        


        })




    }



    
  return (
    <div>
        
        
        
        <input name='email' onChange={Upload} />
      <input name='password' onChange={Upload} />
      <button onClick={Mydata}>click</button>



    </div>
  )
}

export default Login;