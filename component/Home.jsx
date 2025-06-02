import React from 'react'
import { products } from './Product'
import { useNavigate } from 'react-router-dom'
import bgimage from '../src/assets/images/cin.jpg'
import { useCart } from './CartContext'
import { useParams } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const handleclick = (id) => {
    navigate(`/items/${id}`)
  }

const {addToCart} = useCart();
const handleAddcart = () =>{
  addToCart(items)
  setAdded(true)
}

const {id} =useParams()
const items = products.find(items => items.id === parseInt(id))

const [added,setAdded] = useState(false)

if (!items) return <p>products not found</p>



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

            {!added ? (
          <button
            onClick={handleAddcart}
            className='border rounded text-gray-400 font-2xl cursor-pointer md:p-4 md:mt-8 bg-orange-500
             outline-none hover:bg-teal-950 w-[150px] sm:p-2 sm:mt-4'
          >
            Add to cart
          </button>
        ) : (
          <p className='text-green-500 mt-8 text-center text-lg font-semibold '>
           &#10004; Added to cart!
          </p>
        )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
