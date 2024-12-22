import React from 'react'
import{Link} from 'react-router-dom'



const Navbar = ()=>{
    return <nav className='navbar-brand navbar-dark bg-dark navbar-expand-lg '>
        <link to = "/" className ='navbar-brand'>React Logo</link>
        <div className ='ml-auto'>
            <ul className='navbar-nav'>

                <li><Link to="/index" className='nav-link'>Home</Link></li>
                
                <li><Link to="/contact" className='nav-link'>Contacts</Link></li>
            </ul>
            
        </div>

    </nav>
}
export default Navbar
