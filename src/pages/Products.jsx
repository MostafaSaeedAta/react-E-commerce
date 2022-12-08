import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import './Products.scss'
 

const Products = () => {


  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let ComponentMounted = true;
  
useEffect(() => {
  const getProducts = async () => {
    setLoading(true);
    const response = await fetch('https://fakestoreapi.com/products');
    if (ComponentMounted) {
      setData(await response.clone().json()); 
      setFilter(await response.json());
      setLoading(false);
      console.log(filter)
    }

    return () => {
      ComponentMounted = false
    }

  }
  getProducts();
 
}, [])

const Loading = () => {
  return (
    <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
    </>
  )
}
console.log(data);

const filterProduct = (cat) => {
  const updatedList = data.filter((x)=>x.category === cat.toLowerCase());
  setFilter(updatedList);
}
const ShowProducts = () => {
  return(
    <>
      <div className="buttons w-100 d-flex justify-content-center my-4">
          <button className="btn btn-outline-dark mx-2" onClick={() =>setFilter(data)}> All </button>
          <button className="btn btn-outline-dark mx-2" onClick={() =>filterProduct("Men's clothing")}> Men's clothing </button>
          <button className="btn btn-outline-dark mx-2" onClick={() =>filterProduct('Jewelery')}> jewelery </button>
          <button className="btn btn-outline-dark mx-2" onClick={() =>filterProduct('Electronics')}> electronics </button>
          <button className="btn btn-outline-dark mx-2" onClick={() =>filterProduct("Women's clothing")}> Women's clothing </button>
        </div>
        {filter.map((Products) => {
          return (
            <>
            <div className="col-md-3 mb-2">
                <div className="card" style={{width: "18rem"}}>
                  <img src={Products.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{Products.title}</h5>
                    <p className="card-text">{Products.description}</p>
                    <p className="card-text text-center">{Products.price}</p>
                    <a href="#" className="btn btn-primary">buy</a>
                  </div>
                </div>
            </div>
                
            </>
          )
        })}
    </>
  
  )
}


  return (
    <div>
        <div className="container my-5 py-5">
          <div className="row">
            <h3 className="text-center">  products </h3>
          </div>
          <div className="row justify-content-center my-4">
            { loading ? <Loading/> : <ShowProducts/> }

          </div>
        </div>
    </div>
  )
}

export default Products