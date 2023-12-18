import React, { useEffect, useState } from 'react'
import './Page.css'
import Home from '../Home/Home'
import Navbar from '../navbar/Navbar'
import ListMob from '../ListMob/ListMob'
import Proudcts from '../Proudcts/Proudcts'
import WebAbout from '../WebAbout/WebAbout'


export default function Page({activeNav,setactiveNav}) {
  const [SCROLtOP, setSCROLtOP] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>150){
        setSCROLtOP(true)
      }
      else{
        setSCROLtOP(false)

      }
    })
  },[])

function scroltopp(){
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}

  return (
    <div className='Page'>
      <button className='scrolltopp activeScroll' onClick={scroltopp}><i class="fa-solid fa-angle-up"></i></button>
   <Navbar activeNav={activeNav} setactiveNav={setactiveNav} />
   <ListMob activeNav={activeNav} setactiveNav={setactiveNav} />

      <Home/>
      <Proudcts/>
<WebAbout/>
    </div>
  )
}
