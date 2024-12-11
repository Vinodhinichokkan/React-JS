import React from 'react'

class Product extends React.Component{
    state={
        qty:1

    }
    incrHandler =()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrHandler =()=>{
        this.setState({qty:this.state.qty -1})
    }
    render(){
        console.log("First Render")
        return <div>
                <h3>Product Component</h3>
                <h3>Product Qty:{this.state.qty}</h3>
                <button onclick={this.decrcrHandler}>DECR</button>
                <button onclick={this.incrHandler}>INCR</button>
               </div>
    }

}
export default Product