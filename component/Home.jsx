import React from 'react'
import { products } from './Product'
import { Link, useNavigate } from 'react-router-dom'
import bgimage from '../src/assets/images/cin.jpg'


function Home() {
  const navigate = useNavigate()
  const handleclick = (id) =>{
    navigate(`/items/${id}`)
  }

  return (
    <div className='flex flex-wrap gap-4 p-8 bg-no-repeat bg-cover' style={{backgroundImage:`url(${bgimage})`}}>
 {products.map((items)=>(
    <div
    key={items.id}
   onClick={()=> handleclick(items.id)}
   >
<img src={items.image} alt={items.name} className='object-cover rounded w-full 
 transform hover:scale-105 transition duration-300 ' />

<h2 className='text-lg font-semibold mt-3 text-gray-300'>{items.name}</h2>
<p className='text-sm text-black font-bold text-gray-300'>{items.price}</p>
   </div>
 ))}
    </div>
  )
}

export default Home