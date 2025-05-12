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
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center'
    key={items.id}
   onClick={()=> handleclick(items.id)}
   >
<img src={items.image} alt={items.name} className='object-cover rounded w-full  sm:w-[100px] sm:h-40 
    md:w-48 md:h-48 
 transform hover:scale-105 transition duration-300 ' />

<h2 className='text-lg font-semibold mt-3 text-gray-300'>{items.name}</h2>
<p className='text-sm text-black font-bold text-gray-300'>{items.price}</p>
   </div>
 ))}
    </div>
  )
}

export default Home