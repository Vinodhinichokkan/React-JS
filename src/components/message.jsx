import React  from "react";
class Message extends React.Component{
    msg="Hello"
    gmHandler(){

    }

    render(){
        return<div>
            <h3>Message component</h3>
            <h4>Value:{this.msg}</h4>

            <button onclick={this.gmHandler()}>Good Morning</button>
            <button          >Good Night</button>
        </div>
    }
}

export default Message; 


