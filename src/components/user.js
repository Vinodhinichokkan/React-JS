import React from 'react'
import Employee from './ Employee';

class User extends React.Component{
    user_Data={
        name:"vino",
        loc:["Manali","Wayanad","Mysore"],
        address:{
            city:"bhopal",
            pin:560037
        }
    }
    render(){
        return <div>
               <h1>User Component</h1>
               <hr />
               <Employee data = {this.user_Data} />
               </div>
    }

}

export default USER;