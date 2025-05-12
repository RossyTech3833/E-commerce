import React, { useState, useEffect } from 'react';
import Signin from './Signin'; 
import bgimage from '../src/assets/images/cin.jpg'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../src/firebase';
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../src/firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


function Acount() {

  const navigate = useNavigate()
  const location = useLocation();
const cart = location.state?.cart || [];

  const [user, setUser] = useState(null);

  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    if (cart.length === 0) {
      alert("Cart is empty. Cannot submit order.");
      return;
    }
  
    try {
      await addDoc(collection(db, 'orders'), {
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        userId: user.uid,
        email: user.email,
        cart,
        createdAt: serverTimestamp()
      });
  
      alert("Order submitted successfully!");

      navigate('/')
  
      // Optionally: redirect or clear local form
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order.");
    }
  };
  

  return (
    <div className='bg-no-repeat bg-cover h-screen flex items-start justify-center pt-10' 
      style={{ backgroundImage: `url(${bgimage})` }}>
      {!user ? (
        <Signin />
      ) : (
        <form onSubmit={handleFormSubmit} className='mt-6 p-8 bg-white rounded shadow-lg 
        flex flex-col space-y-4 w-[500px] gap-6 '>
          <h2 className='text-orange-500'>Welcome, {user.displayName}</h2>
          <input className='border border-orange-500 outline-none p-3'
            type='text'
            name='name'
            placeholder='Enter name'
            value={formData.name}
            onChange={handleFormChange}
            required
          />
          <input className='border border-orange-500 outline-none p-3'
            type='tel'
            name='phone'
            placeholder='Phone number'
            value={formData.phone}
            onChange={handleFormChange}
            required
          />
          <input className='border border-orange-500 outline-none p-3'
            type='text'
            name='address'
            placeholder='Enter address'
            value={formData.address}
            onChange={handleFormChange}
            required
          />
          <p className='font-bold text-orange-500 flex flex-row'>zenith bank 2211378600 omada Rosemary Chinonso <br></br>
            and send proof of payment to my whatsapp,make sure you do the payment before
             clicking on the submit button
           
          <a className='' href="https://wa/me/2348138332117?text=Hi%20welcome%20to%Rossy's%20page%20AHow%20can%20i%20be%20of%20help">
          <FaWhatsapp className='text-2xl text-orange-500 items-center m-2'/></a>
          </p>
        <button type='submit' className='cursor-pointer bg-orange-500 text-white
         font-bold p-1 text-2xl'>
        
          submit</button>
        </form>
      )}
    </div>
  );
}

export default Acount;
