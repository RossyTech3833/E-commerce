import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './Product'
import { useCart } from './CartContext'
import bgimage from '../src/assets/images/cin.jpg'


function ProductDesc() {

 
  const { addToCart } = useCart(); // this is correct

const handleAddcart = () => {
  addToCart(items); // adds the item to the shared cart context
  setAdded(true)
};


const {id} =useParams()
const items = products.find(items => items.id === parseInt(id))

const [added,setAdded] = useState(false)

if (!items) return <p>products not found</p>

  return (
    <div className='flex flex-col md:flex-row p-8 m-4 justify-center
     bg-no-repeat bg-cover opacity-0.2 h-screen' style={{backgroundImage:`url(${bgimage})`}}>
 
     <img src={items.image} alt={items.name} className='w-[400px] mt-20'/>

<div className=' flex flex-col p-8 font-bold mt-20'>
<h1 className='text-white'>{items.price}</h1>
<p className='text-white'>{items.description}</p>

<div className='md:mt-4 br sm:mt-2'>
 <h3 className='text-orange-600'>promotion</h3>
 <p className='text-white'>call 08138332117 to place your order or add to cart to checkout</p>
</div>
{/* <button onClick={handleAddcart} className='border rounded w-full cursor-pointer px-4 mt-8
bg-gradient-to-r from-blue-300 to-purple-500 outline-none hover:animate-bounce'>add to cart</button> */}

{!added ? (
          <button
            onClick={handleAddcart}
            className='border rounded text-gray-400 font-2xl cursor-pointer md:p-4 md:mt-8 bg-orange-500
             outline-none hover:animate-bounce w-[150px] sm:p-2 sm:mt-4'
          >
            Add to cart
          </button>
        ) : (
          <p className='text-green-500 mt-8 text-center text-lg font-semibold '>
           &#10004; Added to cart!
          </p>
        )}
</div>
  
  
    </div>
  )
}

export default ProductDesc