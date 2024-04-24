
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [Loading ,setLoading]=useState(true);
  const [posts, setPosts] = useState([]);


  async function fetchproductData() {
    
    setLoading(true);

    try{
      const res= await fetch( API_URL);
      const data=await res.json();
  
      setPosts(data);
    }
    catch (error)
    {
      console.log("Data Not Found ");
      setPosts([]);

    }

    setLoading(false);

    
    
  } 
  
  useEffect( ()=>{

    fetchproductData();
  },[])
  
  return (
    <div>
     
       {
        Loading ? <Spinner/> :
        posts.length > 0 ?
        (
          <div className=" grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">

           
            {
               posts.map((post) =>(
                <Product key ={post.id} post={post} />
             
              ))
            }
            </div>
        ):
         <div className=" flex justify-center items-center">
           <p>No Data Found </p>
         </div>
       }

    </div>
  );

}
export default Home;