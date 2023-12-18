import React from 'react'
import './Home.css'
import shoe from './download.jpeg'
export default function Home() {
  return (
    <div className='Home'>
        <div className="leftSide">
<h1><span>nike</span> <br />Collections</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quia reiciendis libero velit illo praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum nemo eos at quod nam nulla omnis deserunt non voluptatem voluptatibus alias id eligendi qui quam iste consequatur, quidem optio?</p>
        </div>
        <div className="rightSide">
<img src={shoe} alt="" />
<div className="soial">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-facebook-messenger"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        </div>
      
    </div>
  )
}
