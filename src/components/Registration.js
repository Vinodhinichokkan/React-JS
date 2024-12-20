import React, { useState } from 'react'

const Reg = () => {
  let [user,setUser]  = useState({uName:"",email:"",mobile:""})
  let uNameHandler=(event)=>{
    setUser({...user,uName:event.target.value})
  }
  let emailHandler=(event)=>{
    setUser({...user,email:event.target.value})
  }
  let mobileHandler=(event)=>{
    setUser({...user,mobile:event.target.value})
  }
  let submitHandler = (event)=>{
    event.preventDefault()
    console.log(user)
  }
  return <React.Fragment> <br /><br /><br />
          <pre>{JSON.stringify(user)}</pre>
         <form onSubmit={submitHandler}>
          User Name: <input type="text" placeholder='User Name' onChange={uNameHandler}/> <br /><br />
          Email Id::::::::<input type="email" placeholder='Email Id' onChange={emailHandler} /> <br /><br />
          Mobile No:::<input type="number" placeholder='Mobile' onChange={mobileHandler} /> <br /><br />
          <input type="submit" value="Registration" />
         </form>
         </React.Fragment>
}

export default Reg