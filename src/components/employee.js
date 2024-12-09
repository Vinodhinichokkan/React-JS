import React from "react";

class Employee extends React.Component{
    render(){
        return <div>
            <h1>Employee Component</h1>
            <hr/>
            <pre>{JSON.stringify(this.props)}</pre>
            <h4>Employee Name:{this.props.ata.name}</h4>
            <h4>Pincode:{this.props.data.address.pin}</h4>
        </div>
    }
}

export default Employee;
  


    