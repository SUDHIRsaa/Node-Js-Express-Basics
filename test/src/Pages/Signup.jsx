import React from 'react'

export default function Signup() {
  return (
     <div>
        <form> 
            <label>Signup Form</label> <br />
            <h1>Email</h1>
            <input type="email" placeholder='Email'/> <br />
            <h2>Password </h2>
            <input type="password" placeholder='Password'/>
            <button type="submit">Signup</button>
        </form>
    </div>
  )
}
