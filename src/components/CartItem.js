import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlics';

function CartItem(props) {

    let item=props.item;
    let index=props.index;
    const dispatch=useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    //add toast
  }

  return (
     <div className=" mx-auto flex flex-col items-center justify-between 
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
    <FcDeleteDatabase onClick={removeFromCart}/>
    </div>
  )
}

export default CartItem