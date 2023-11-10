import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../redux/Slices/CartSlics'

const Product = (props) => {
  const item=props.item;
  const cartAdded=useState();
  const {cart} = useSelector((state)=> state);
  const dispatch=useDispatch();

  const addToCart = ()=>{
    dispatch(add(item));
    //show the toast
  }
  const removeFromCart = () =>{
    dispatch(remove(item.id));
  //show toast
  }

  return <div className="flex flex-col items-center justify-between 
  hover:scale-101 transition duration-300 ease-in gap-3 p-2 mt-10 ml-1 rounded-xl outline">
    <div>
     <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>

    </div>
    <div>
    <p className="w-40 text-gray-400 font-normal text-[5px] text-left">{item.description}</p>
    </div>
   <div >
   <img src={item.image} alt={item.id} className="w-[100px] h-[100px]"/>
   </div>
   <div className="flex justify-between  items-center w-full mt-1">
    <p className="text-green-600 font-semibold">${item.price}</p>
   </div>
   {
          cart.some((p) => p.id == item.id) ?
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 mx-auto uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove Item
          </button>) :
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }

  </div>;
};

export default Product;
