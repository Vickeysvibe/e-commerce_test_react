import React from 'react'
import "./homepage.css"


export const Card = ({product}) => {
  return (
    <div key={product.id} style={{ border: '1px solid #ddd',borderRadius:"10px", padding: '10px', margin: '10px',maxWidth:'200px',minWidth:'200px', width: '25%' ,height:'300px', marginRight:'40px', cursor:'pointer'}}>
      <div className="ii" style={{display:'flex', justifyContent:'center', alignItems:'centre', height:'40%'}}>
      <div className="ima" style={{height:'100%',}}>
        <img src={product.Image} alt={product.name} style={{ maxWidth:'100%', Width: 'auto', height: '100%', objectFit:'fill' }} />
      </div>
      </div>
      <div className="info">
        <h3 style={{marginTop:'20px'}}>{product.name}</h3>
        <p style={{marginTop:'20px'}}>{product.description}</p> 
      </div>
      <div className="bot" style={{display:"flex", justifyContent:"space-between",marginTop:'20px' }} > 
        <p>{product.rating}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  )
}

export default Card
