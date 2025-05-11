import React from 'react'
import { products } from './Product'
import { useParams, useNavigate } from 'react-router-dom'
import bgimage from '../src/assets/images/cin.jpg'

function SearchResults() {
  const navigate = useNavigate()
  const { query } = useParams()

  const handleclick = (id) => {
    navigate(`/items/${id}`)
  }

  const filteredproducts = products.filter(item =>
    item.category.toLowerCase() === query.toLowerCase()
  )

  return (
    <div className='flex flex-wrap gap-4 bg-no-repeat bg-cover' style={{backgroundImage:`url(${bgimage})`}}>
      <h2 className='text-blue-500 mt-6 p-4 justify-center font-bold text-xl'>
        Your search results for "{query}"
      </h2>

      {filteredproducts.length > 0 ? (
        <div className='flex flex-wrap gap-4 py-4 w-[500px]'>
          {filteredproducts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleclick(item.id)}
              className='cursor-pointer hover:scale-105 transition duration-300 bg-white rounded shadow-md p-4 w-[200px]'
            >
              <img src={item.image} alt={item.name} className='w-full h-[150px] object-cover rounded' />
              <h1 className='text-gray-700 mt-2 font-semibold'>{item.name}</h1>
              <p className='text-gray-500'>{item.price}</p>
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
