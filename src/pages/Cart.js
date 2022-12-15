import React from "react";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  // const {state : {cart, loading, error}} = useProduct();
  let content;
  // if(loading){
  //   content = <p>Loading............................Wait Few Moment</p>
  // };
  // if(error){
  //   content = <p>Danger............................Something went wrong</p>
  // };
  // if(!loading && !error && cart.length === 0){
  //   content = <p>Nothing to show............................cart is Empty</p>
  // };
  // if(!loading && !error && cart.length){
  //   content = cart.map(product => <ProductCard key={product.id} product={product} />)
  // };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Cart;
