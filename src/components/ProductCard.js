import React from "react";
import { BiListPlus, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/productActions";
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
      key={product.id}
    >
      {
        pathname.includes("cart") &&
      (<div className="badge badge-primary absolute top-0 right-0 font-bold">{product.quantity}</div>)
      }
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li key={feature} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {
          !pathname.includes("cart") &&
          (<button
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            Add to cart
          </button>)
        }
        {
          !pathname.includes("cart") &&
          (<button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'

          >
            <BiListPlus className='text-white' />
          </button>)
        }
        {
          pathname.includes("cart") &&
          (<button
            title='Delete'
            className='bg-red-500  py-1 px-2 rounded-full w-full flex justify-center items-center text-white'
            onClick={() => dispatch(removeFromCart(product))}
          >
            <BiTrash className='text-white' />
            <p>remove</p>
          </button>)
        }
      </div>
    </div>
  );
};

export default ProductCard;
