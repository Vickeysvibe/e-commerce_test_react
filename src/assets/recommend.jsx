import React from 'react'
import Card from './cardd'
import "./homepage.css"


export const Recommend = ({list}) => {
  return (
    <div  style={{display:'flex', justifyContent:'center', alignItems:'centre', width:'100%', marginTop:'30px'}}>
      <div className='entire' style={{ marginTop:'40px'}}>
        <h2 style={{textAlign:'center '}}>Recommended products : </h2>
        <div className="prods" style={{display:'flex', justifyContent:'space-around', width:'100%'}}>
        {list.map(product=>(
            <Card key={product.id} product={product}/>
        ))}
        </div>
    </div>
    </div>
  )
}

export default Recommend

