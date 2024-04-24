
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product =({post})=>
{ 
    
  const {cart} =useSelector((state) => state);
  const dispatch =useDispatch();

  const addtoCart =()=>{
    dispatch(add(post));
    toast.success("Items added to Cart ");
  }
   
  const removeFromCart =()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart  ");
  }

   return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in shadow-2xl shadow-blue-500/20 gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">{post.title}</p>
      </div>
      <div>
        <p className=" w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image}  className="h-full w-full"/>
      </div>

      <div className="flex justify-between gap-14 item-center ">
      <div>
        <p className="text-green-600 font-semibold ">${post.price}</p>
      </div>
       {
        cart.some((p) => p.id === post.id) ?
        (
          <button
          className="text-gray-700 border-gray-700 border-2 rounded-full font-semibold text-[12px] p-1 px-3 uppercase  hover:text-white"
          onClick={removeFromCart}>Remove Item  </button>
        ):
        (
          <button
          className="text-gray-700 border-gray-700 border-2 rounded-full font-semibold text-[12px] p-1 px-3  hover:text-white "
           onClick={addtoCart}>Add to cart</button>
        )
       }
      </div>
      </div>
      
  );

}
export default Product;