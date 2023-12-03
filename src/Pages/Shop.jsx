import { useEffect, useState } from 'react';
import { Homepage } from '../assets/homepage'
import { Recommend } from '../assets/recommend'
import axios from 'axios';

export const Shop = () => {

  const [products, setProducts]=useState([])


  useEffect(()=>{
    const fetchProducts=async()=>{
      try {
        const response = await axios.get('https://64aed427c85640541d4dc94b.mockapi.io/products');
        setProducts(response.data.slice(2,6))
        console.log(products)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchProducts()
  },[])
    
  return (
    <div>
      <Homepage/>
      <Recommend key={products.id} list={products}/>
    </div>
  )
}

export default Shop
