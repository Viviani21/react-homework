import React from 'react'

const Navbar = () => {
  return (
    
    <nav className="nav-links">
    <div>
     <ul >     
       <li >
         <a className="active" href="/">Home</a>
       </li>
       <li >
         <a href="/aboutUs">About Us</a>
       </li>
       <li >
         <a  href="/products">Products</a>
       </li>
       <li >
         <a  href="/contact">Contact</a>
       </li>
       <li >
         <a  href="/blog">Blog</a>
       </li>
       <li>
         <a   href="/fqa">FAQ</a>
       </li>
     </ul>
   </div>   
  
</nav>        
  )
}

export default Navbar