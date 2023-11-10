import { NavLink } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return <div className="flex justify-between items-center h-10 max-w-xl mx-auto">
<div className="ml-5">
<NavLink to='/'>  
   <img src="../logo.png" alt="pageLogo" className="h-5"></img>
   </NavLink>
</div>

<div className="flex items-center font-medium text-slate-100 mr-5 space-x-2">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-3 h-3 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
    </div>
};

export default Navbar;
