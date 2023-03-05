import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <img className = "" src="" alt="Liquid-Moni Logo" />  
        
        <ul>
          <li><Link to = "">Home</Link></li>
          <li><Link to = "">About</Link></li>
          <li><Link to = "">Contact</Link></li>
          <li><Link to = "">Pricing</Link></li>
        </ul>

        <div className="button-group ">
          <button className="">Login</button>
          <button className="">Sign Up</button>
        </div>
      </nav>      
    </div>
  )
}
