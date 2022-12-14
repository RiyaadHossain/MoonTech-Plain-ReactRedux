import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom";
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from "../redux/actions/productAction";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch()
  const { pathname } = useLocation()

  return (
    <div
      className='shadow-lg rounded-3xl border relative p-3 flex flex-col text-indigo-900'
      key={product._id}
    >
      {pathname.includes('cart') && <div className="absolute top-3 right-4"><p className="bg-indigo-500 text-white w-7 h-7 rounded-full grid place-items-center">{product.quantity}</p></div>}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product?.keyFeature.map((feature, i) => {
            return <li key={i} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      {pathname.includes('cart') ?
        <div className='flex gap-2 mt-5'>
          <button onClick={() => dispatch(removeFromCart(product))} className='bg-red-600 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Remove from Cart
          </button>
        </div>
        :
        <div className='flex gap-2 mt-5'>
          {!pathname.includes('wishlist') ?
            <button onClick={() => dispatch(addToCart(product))} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
              Add to cart
            </button> :
            <button onClick={() => dispatch(removeFromWishlist(product))} className='bg-amber-600 rounded-full py-1 px-2 flex-1 text-white text-bold'>
              Remvoe from WishList
            </button>}
          {!pathname.includes('wishlist') && <button
            title='Add to wishlist'
            className='bg-indigo-500  py-1 px-2 rounded-full'
            onClick={() => dispatch(addToWishlist(product))}
          >
            <BiListPlus className='text-white' />
          </button>}
        </div>
      }
    </div>
  );
};

export default ProductCard;
