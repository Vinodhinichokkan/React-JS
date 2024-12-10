import React from 'react'
class Navbar extends React.Component{

    render(){
        return <nav>
            <a href="#">Logo</a>
            <div>
                <ul>
                    <li><a href ="#">Home</a></li>
                    <li><a href ="#">About</a></li>
                </ul>
            </div>
        </nav>
    }
        
}

export default Navbar