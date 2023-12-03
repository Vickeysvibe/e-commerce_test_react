
import  { useState } from 'react';
import './css/upload.css'


const Upload = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [filePath, setFilePath] = useState("");



  const handleUpload = async () => {
    try {
      const apiUrl = 'https://64aed427c85640541d4dc94b.mockapi.io/products';
      const body = {
        name: productName,
        price: productPrice,
        catagory: productCategory,
        description: productDescription,
        Image: productImage,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        console.log('Product uploaded successfully!');
        alert('Product uploaded successfully!') 
        // You can redirect the user or perform other actions upon successful upload
      } else {
        console.error('Product upload failed');
        // Handle error cases, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error occurred during product upload:', error);
    }
  };

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'centre', width:'100%', marginTop:'100px'}}>
      <div className="boxx" >
        
      <h2>Upload Product</h2>
      <div>
        <label htmlFor="productName">Product Name: </label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productPrice">Product Price: </label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productCategory">Product Category: </label>
        <input
          type="text"
          id="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productDescription">Product Description: </label>
        <textarea
          id="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productImage">Product Image link: </label>
        <input
          type="text"
          id="productImage" 
          value={productImage}
          onChange={(e) => setProductImage(e.target.value)}
        />
        <img src={productImage} alt="" style={{height:'200px', width:'auto'}}/>
      </div>
      <button onClick={handleUpload}>Upload Product</button>
      </div>
    </div>
  );
};

export default Upload;
