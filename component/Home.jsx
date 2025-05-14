import React from 'react'
import { products } from './Product'
import { useNavigate } from 'react-router-dom'
import bgimage from '../src/assets/images/cin.jpg'

function Home() {
  const navigate = useNavigate()
  const handleclick = (id) => {
    navigate(`/items/${id}`)
  }

  return (
    <div
      className="min-h-screen p-8 bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {products.map((items) => (
          <div
            key={items.id}
            onClick={() => handleclick(items.id)}
            className="bg-white/10 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 backdrop-blur-md"
          >
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-40 object-cover rounded transform hover:scale-105 transition duration-300"
            />
            <h2 className="text-md font-semibold mt-3 text-gray-100">{items.name}</h2>
            <p className="text-sm text-gray-300 font-bold">{items.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
