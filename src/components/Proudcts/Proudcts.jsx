import React from 'react'
import   './Proudcts.css'
import shoe1 from './OIP (1).jpeg'
import { products } from '../../Data/Products'

export default function Proudcts() {
  return (
    <div className='Proudcts'>
{products.map((x,i)=>(
    
<div className="box" key={i}>
    <div className="layout">
        <div className="boxesLay">
        <p><i class="fa-solid fa-heart"></i></p>
        <p><i class="fa-solid fa-arrow-trend-up"></i></p>
        </div>
    </div>
<img src={x.img} alt="" />
<h1>{x.title}</h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat?</p>
<p>$100.99</p>
<button>add to cart</button>
</div>

))}

    </div>
  )
}
