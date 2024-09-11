import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SingleRockingChair = ({ rockingChair }) => {
  
  const { id, name, image, price, description } = rockingChair || {};
  const {addToCart} = useContext(AuthContext);

  return (
    <div>
      <div className="card bg-white shadow-md rounded-lg overflow-hidden p-4">
        <img src={image} alt="Rocking Chair Wood" className="w-full h-40 object-cover mb-3 rounded-md" />
        <div className="">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-gray-500 font-bold">${price}</p>
          <p className="text-green-500 font-bold">30% OFF</p>
          <p className="text-gray-700 mt-2">{description}</p>
          <button onClick={()=>addToCart(rockingChair)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-4">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleRockingChair;