import React, { useEffect } from 'react'
import   './WebAbout.css'
import shoe from '../Proudcts/OIP (1).jpeg'
import shoe2 from '../Proudcts/OIP (2).jpeg'
import shoe3 from '../Proudcts/OIP (3).jpeg'
import shoe4 from '../Proudcts/OIP.jpeg'
import { imagessss } from '../../Data/WeAbout'
import { useState } from 'react'



export default function WebAbout() {
    const [Selected, setSelected] = useState(0)
    useEffect(()=>{
        function choose(small){
            const images=document.querySelectorAll(".leftAbout .imgaes img")
            images.src=small.src
        }
        
    },[])
  return (
    <div className='WebAbout'>
        <div className="leftAbout">
<div className="imgaes">
    {imagessss.map((x,i)=>(
        <img src={x.image} alt="" onClick={()=>setSelected(i)} />
    ))}

</div>
<div className="originalImg">
<img src={imagessss[Selected].image} alt="" />
</div>
        </div>
        <div className="rightAbout">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, tenetur? Officia nulla cum sunt quaerat eveniet nesciunt qui asperiores minima? Quo dolorum, voluptatibus veniam similique eos possimus quod quis esse!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus perferendis sunt fuga. Deleniti minus dignissimos recusandae, similique consectetur possimus natus in iusto debitis enim est ea quam aut ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident unde ad, in, possimus laborum assumenda quibusdam atque eligendi voluptatem rem facere. Error maxime, cumque quis similique quos officiis quisquam aspernatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolores inventore quidem, doloremque reprehenderit libero tempore totam obcaecati vel minima explicabo odit? Voluptas, iste molestiae? Autem pariatur quod dolorem non.</p>
        </div>
    </div>
  )
}
