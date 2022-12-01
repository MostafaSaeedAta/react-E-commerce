import './Home.scss'
import product from '../assets/product-38.png'

const Home = () => {
  return (
    <div className='hero'>
        <div className="d-flex align-items-center justify-content-center">
            <img src={product} className="card-img" alt="..."/>
            <div className="card-img- ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text pe-5"> 
                    This is a wider card with supporting 
                    text below as a natural lead-in to additional
                    content. This content is
                    a little bit longer. 
                </p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
    
  )
}

export default Home