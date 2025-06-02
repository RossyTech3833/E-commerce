import React, { useState } from 'react'
import { products } from './Product'
import { useCart } from './CartContext'
import { RiDeleteBin6Line } from "react-icons/ri";
import Signin from './Signin';
import bgimage from '../src/assets/images/cin.jpg'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [user,setUser] = useState(null)
  const {cart, clearCart,removeFromCart,
    increaseQty,
    decreaseQty,} = useCart()
  const handlecheckout = () =>{
    alert("proceding to payment")
    clearCart()
  }
 const navigate = useNavigate()

  const handleproceed = () =>{
    navigate('/Acount')
  }
   
    const totalPrice = cart.reduce((acc, item) => {
      console.log(`Calculating: ${item.name} - Price: ${item.price}, Qty: ${item.quantity}`);
      return acc + (Number(item.price) || 0) * (Number(item.quantity) || 0);
    }, 0);
    
    (`Total Price: ${totalPrice}`);
    



  return (
    <div className="bg-gray-500 opacity-0.2 flex flex-col md:flex-wrap 
     justify-between items-start p-8 gap-2 bg-white">
  <h2>your selected items</h2>
  {cart.length === 0? (
    <p className='mt-6 text-blue-400 p-8'>your cart is empty</p>
  ):(
    cart.map((item,index) =>(
      <div key ={index} className=' mt-10 p-8 flex '>
      <img className='w-[100px] object-cover' src={item.image} alt={item.name}/>
     <div className=' p-8 font-bold  '>
     <h4 className='text-black'>{item.name}</h4>
      <p className='text-black'>price: N{item.price}</p>
      <p className='mt-4 text-black'>quantity:{item.quantity}</p>

      <div className='flex gap-4 mt-4 px-8'>
      <button onClick={() => increaseQty(item.id)} className='cursor-pointer px-3 py-1
       bg-orange-500 text-white rounded'>+</button>
                <button onClick={() => decreaseQty(item.id)} className=' cursor-pointer px-3
                 py-1 bg-orange-500 text-white rounded'>-</button>
                <button onClick={() => removeFromCart(item.id)} className='cursor-pointer
                 px-3 py-1 md:flex sm:flex-cols rounded'><RiDeleteBin6Line className='text-red-600 font-2xl' /></button>
      </div>
     </div>
    </div>
    ))
  )}

   {/* Display Total */}
   <div className='mt-6 p-4 text-xl font-bold text-white'>
            <h3>Total: N{totalPrice.toFixed(2)}</h3>
          </div>

 {!user?(
  // <Signin onSuccess={setUser}
 
  // />
  <Signin onSuccess={(user) => {
    setUser(user); // show checkout button
    // Do NOT navigate here
  }} />
 ) : (
  <button className=' border rounded  cursor-pointer mt-0 left-10 px-8 mx-10 
  bg-orange-500 outline-none'
  onClick={() => {
    handlecheckout();   // alert + clear cart
    handleproceed();    // navigate to /Acount
    navigate('/Acount', { state: { cart } }); // pass cart data
  }}
 disabled = {cart.length === 0} 
  >
   checkout</button>
 )}

    
    </div>
  )
}

export default Cart