import React from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";


const CartItem =({item,itemindex})=>
{
      
    const dispatch = useDispatch();

    const removefromcart=()=>{

        dispatch(remove(item.id));
        toast.success("Item removed ");
    }


    return(
        <div  className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
           <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">

            <div className="w-[30%]">
                <img  src={item.image}className="object-cover " />
            </div>
            <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                <h1  className="text-xl text-slate-700 font-semibold">{item.titel}</h1>
                <h1 className="flex items-center justify-between">{item.description}</h1>
           
           <div  className="flex items-center justify-between">
                <p className="font-bold text-lg text-green-600">${item.price}</p>
                <div
                className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                onClick={removefromcart}
                  >
                <MdOutlineDelete />
                </div>
            </div>
            </div>

        </div>
        </div>

    );
}
export default CartItem;