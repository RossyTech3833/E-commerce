import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../src/firebase';

function Signin({ onSuccess }) {

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => unsubscribe();
  // }, []);
  
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    if (loading) return;

    setLoading(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //  Call the onSuccess callback passed from Cart
      if (onSuccess && user) {
        onSuccess(user);
      }
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert("Error signing in: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-8 text-white m-8 text-2xl'>
      <h2 className='sm:text-base md:text-2xl'>Sign in to checkout</h2>
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className='cursor-pointer m-4 bg-orange-500 sm:px-2 md:px-4 py-2 rounded text-white md:text-2xl sm:text-base'
      >
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </button>
    </div>
  );
}

export default Signin;
