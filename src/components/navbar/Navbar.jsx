import React, { useEffect, useState } from 'react'
import './Navbar.css'
export default function Navbar({activeNav,setactiveNav}) {
  const [changeNav, setchangeNav] = useState(false)


  useEffect(()=>{
    window.addEventListener("scroll",()=>{
if(window.scrollY>100){
setchangeNav(true)
}else{
  setchangeNav(false)
}
    })
  },[])
  return (
    <div className={'Navbar '+(changeNav&&"changeNav")}>
      <div className="firstNav">
<h1>shoe<span>s</span></h1>
      </div>
      <div className="secNav">
        <ul>
          <li>home</li>
          <li>products</li>
          <li>about</li>
          <li>reviews</li>
          <li>services</li>
        </ul>
        </div>
        <div className="LastNav">
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-user"></i>
        </div>
        <div onClick={()=>setactiveNav(!activeNav)} className={"bars "+(activeNav&&"activeBars")}>
          <span></span><span></span><span></span>
        </div>
    </div>
  )
}
