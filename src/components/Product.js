class Product extends React.Component{
    render(){
        return <div className='container'>
                  <div className="row">
                  <div className="col-8">
                    <table className='table'>
                        <thead>
                            <th>Name</th>
                            <th>Image</th>
                            <th>price</th>
                            <th>Qty</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product_Name}</td>
                                <td><img width={"80px"}src={this.state.image}alt=""/></td>
                                <td>{this.state.price}</td>
                                <td>{this.state.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                  </div>
                  
        </div>
    }
}

export default Product