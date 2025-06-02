import React, { useState } from 'react'
import { products } from './Product'
import { useNavigate } from 'react-router-dom'
import bgimage from '../src/assets/images/cin.jpg'
import { useCart } from './CartContext'


function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(null);

  const handleclick = (id) => {
    navigate(`/items/${id}`);
  };

  const handleAddcart = (item, e) => {
    e.stopPropagation(); // prevent card click from navigating
    addToCart(item);
    setAdded(item.id);
  };

  return (
    <div
      className="min-h-screen p-8 bg-no-repeat bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => handleclick(item.id)}
            className="bg-white/10 rounded-lg cursor-pointer hover:shadow-lg 
            transition-all duration-300 backdrop-blur-md" >
            <img
              src={item.image}
           alt={item.name}
              className="w-full object-cover rounded transform hover:scale-105 transition duration-300"
            />
            <h2 className="text-md font-semibold mt-3 text-gray-100">{item.name}</h2>
            <p className="text-sm text-gray-300 font-bold">{item.price}</p>

            {added !== item.id ? (
              <button
                onClick={(e) => handleAddcart(item, e)}
                className="border items-center rounded text-gray-400 font-2xl cursor-pointer md:p-4 md:mt-8
                 bg-orange-500 outline-none hover:bg-teal-950 md:w-[150px] sm:w-[100px] sm:p-2 sm:mt-4"
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
    </div>
  );
}

export default Home
