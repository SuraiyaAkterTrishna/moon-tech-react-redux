import React from "react";
import { BiListPlus, BiTrash } from "react-icons/bi";

const ProductCard = ({ product }) => {

  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900'
      key={product.id}
    >
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        <button
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          // onClick={() =>
          //   dispatch({ type: actionTypes.ADD_TO_CART, payload: product })
          // }
        >
          Add to cart
        </button>
        <button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
          // onClick={() => dispatch({ type: actionTypes.ADD_TO_WISHLIST, payload: product })}
        >
          <BiListPlus className='text-white' />
        </button>
        <button
          title='Delete'
          className='bg-red-500  py-1 px-2 rounded-full'
          // onClick={() => dispatch({ type: actionTypes.REMOVE, payload: product })}
        >
          <BiTrash className='text-white' />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
