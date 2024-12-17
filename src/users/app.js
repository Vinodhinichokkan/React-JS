import {link,BrowserRouter as Router} from 'eact-router-dom'
let App = ()=>{

  return <div>
      <Router>
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <a href="/index" className="navbar-brand">Logo</a>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li><a href="/index" className="nav-link">Home</a></li>
              <li><a href="/about" className="nav-link">About</a></li>
              <li><a href="/services" className="nav-link">Services</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </nav>

        <switch>
          <route path = "/index" component ={Home}/>
          <route path = "/about" component ={About}/>
          <route path = "/services" component ={Services}/>

        </switch>
      </Router>
      </div>
}

export default App