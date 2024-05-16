
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 
const Navbar = ()=>
         {
    return (
      <div>
        
            <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">NewsFlow</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link text-white" to="/">About</Link>
            </li> */}
             <Link className="nav-link text-white" to="/business">Business</Link> 
             <Link className="nav-link text-white" to="/entertainment">Entertainment</Link> 
             <Link className="nav-link text-white" to="/general">General</Link> 
             <Link className="nav-link text-white" to="/health">Health</Link> 
             <Link className="nav-link text-white" to="/science">Science</Link>
             <Link className="nav-link text-white" to="/sports">Sports</Link> 
             <Link className="nav-link text-white" to="/technology">Technology</Link> 
            </ul>
      </div>
    </div>
  </nav>
      </div>
      
    )
  }

export default Navbar
// bg-dark background dark 
// text-white for color the text
// react class based components with proptypes

     // class based component
  
// export class Navbar extends Component {
//   render() {
//     return (
      
//     )
//   }
// }
