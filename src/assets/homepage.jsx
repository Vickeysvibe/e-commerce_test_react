import "./homepage.css"
import { Link } from "react-router-dom";



export const Homepage = () => {
  return (
    <div className='home'>
        <div className="left">
          <div className="content">
            <h1>Let your old products</h1>
            <h2>make money for you</h2>
            <div className="btns">
              <button>View more</button>
              <button><Link to="/sell">Sell</Link></button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src="https://blog.hubspot.com/hs-fs/hubfs/ecommerce%20marketing.jpg?width=595&height=400&name=ecommerce%20marketing.jpg"/>
          </div>
        </div>
    </div>
  )
}
