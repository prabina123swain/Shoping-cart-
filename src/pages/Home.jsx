import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);

  async function fetchProductDetails(){
    setLoading(true);
    try{
      let output=await fetch(API_URL);
      let res=await output.json();
      setProducts(res);
      console.log(products);
    }
    catch(e){
      console.log("Bro Error in fetching Data ");
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductDetails();
  },[]);
 
  return <div>
  {
    loading? (<Spinner/>):
    (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-xl p-2 mx-auto space-y-10 space-x-3 min-h-[80vh]">
      {
        products.map( (item) => (
        <Product item={item} key={item.id}/>
      ))
      }
    </div>)
      }
    
  </div>;
};

export default Home;
