import React from 'react'

export default function Login() {
    const onchange=(e)=>{

        console.log(e.target.value);
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
    }
  return (
    <div>
        <form onSubmit={onsubmit}> 
            <label>Login Form</label> <br />
            <h1>Email</h1>
            <input type="email" onChange={onchange} placeholder='Email'/> <br />
            <h2>Password </h2>
            <input type="password" onChange={onchange} placeholder='Password'/>
            <button type="submit ">Login</button>
        </form>
    </div>
  )
}
