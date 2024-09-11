import { createUserWithEmailAndPassword, GoogleAuthProvider, OAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import Swal from 'sweetalert2';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const appleProvider = new OAuthProvider('apple.com');
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [cart, setCart] = useState([]);

  const userLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const userLoginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  }

  const userLoginWithApple = ()=>{
    setLoader(true);
    return signInWithPopup(auth, appleProvider);
  }

  const userLogout = () => {
    setLoader(true);
    return signOut(auth);
  }

  const userSignUp = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Product Added to Cart Successfully",
      showConfirmButton: false,
      timer: 1500
    });
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart( updatedCart );
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoader(false);
      }
      else {
        setUser(null);
        setLoader(false);
      }
    })

    return () => {
      unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    userLogin,
    userLogout,
    userSignUp,
    userLoginWithGoogle,
    userLoginWithApple,
    loader,
    cart,
    setCart,
    addToCart,
    removeFromCart
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;