import React from 'react'
import   './ListMob.css'

export default function ListMob({activeNav,setactiveNav}) {
  return (
    <div className={'ListMob '+(activeNav&&"activeList")}>
        <div className={"barsMob"} onClick={()=>setactiveNav(false)}>
            <span></span><span></span><span></span>
        </div>
          <ul>
          <li  onClick={()=>setactiveNav(false)}>home</li>
          <li  onClick={()=>setactiveNav(false)}>products</li>
          <li  onClick={()=>setactiveNav(false)}>about</li>
          <li  onClick={()=>setactiveNav(false)}>reviews</li>
          <li  onClick={()=>setactiveNav(false)}>services</li>
        </ul>
    </div>
  )
}
