import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


export const Data= async()=>{

    const [products, setProduct] = useState('')
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://64aed427c85640541d4dc94b.mockapi.io/products');
        const users = response.data;
        setProduct(users.slice(0, 4));
        console.log(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return products;
}

export default Data;
