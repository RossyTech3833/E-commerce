import React, { useState } from 'react'
import { products } from './Product'
import { useParams, useNavigate } from 'react-router-dom'
import bgimage from '../src/assets/images/cin.jpg'
import { useCart } from './CartContext'

function SearchResults() {
  const navigate = useNavigate()
  const { query } = useParams()
  const [added,setAdded] = useState(null)
  const {addToCart} = useCart()

  const handleclick = (id) => {
    navigate(`/items/${id}`)
  }

  const handleAddcart = (item, e) => {
    e.stopPropagation(); // prevent card click from navigating
    addToCart(item);
    setAdded(item.id);
  };

  const filteredproducts = products.filter(item =>
    item.category.toLowerCase() === query.toLowerCase()
  )

  return (
    <div className='flex flex-wrap gap-4 bg-white'>
      <h2 className='text-blue-500 mt-6 p-4 justify-center font-bold text-xl'>
        Your search results for "{query}"
      </h2>

      {filteredproducts.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        gap-6 max-w-6xl w-full'>
          {filteredproducts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleclick(item.id)}
              className='cursor-pointer hover:scale-105 transition duration-300 bg-white rounded shadow-md p-4 w-[200px]'
            >
              <img src={item.image} alt={item.name} className='w-full h-[150px] object-cover rounded' />
              <h1 className='text-gray-700 mt-2 font-semibold'>{item.name}</h1>
              <p className='text-gray-500'>{item.price}</p>
             
              {added !== item.id ? (
              <button
                onClick={(e) => handleAddcart(item, e)}
                className="border flex justify-end rounded text-gray-400 font-2xl cursor-pointer md:p-4 md:mt-8
                 bg-orange-500 outline-none hover:bg-teal-950 w-[150px] sm:py-2 sm:mt-4"
              >
                Add to cart
              </button>
            ) : (
              <p className="text-green-500 mt-8 text-center text-lg font-semibold ">
                &#10004; Added to cart!
              </p>
            )}



            </div>
          ))}
        </div>
      ) : (
        <p className='text-red-500 p-4'>No product found for "{query}"</p>
      )}
    </div>
  )
}

export default SearchResults
