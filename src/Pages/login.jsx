import { useState } from 'react';
import './css/login.css';
import axios from 'axios';

export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://64aed427c85640541d4dc94b.mockapi.io/users');
      const users = response.data; 

      // Check if the provided email and password match any user
      const matchedUser = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (matchedUser) {
        // If a match is found, route to a new page (replace '/dashboard' with your desired route)
        window.location.href='/kids'
      } else {
        // If no match is found, show an alert
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='log-out'>
      <div className="log-box">
        <h1>Login</h1>
        <form className='log-form' onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="em"
            placeholder='Enter e-mail id'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="pass"
            placeholder='Enter password'
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
