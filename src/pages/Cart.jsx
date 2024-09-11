import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import NavBar from '../components/NavBar';

const Cart = () => {
  const { cart, setCart, removeFromCart } = useContext(AuthContext);

  const increaseQty = (id) => {
    setCart(
      Array.isArray(cart) && cart.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      Array.isArray(cart) && cart.map(item =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <NavBar></NavBar>
      <div className='container mx-auto p-6'>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cart Items Section */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold mb-4">An overview of your order</h2>
            <div className="bg-white shadow rounded-lg p-4">
              {Array.isArray(cart) && cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">

                  <div className="flex items-center">
                    {/* Quantity control */}
                    <div className="flex items-center mr-4">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="text-xl px-2 border rounded-l">
                        -
                      </button>
                      <span className="px-2">{item.qty}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="text-xl px-2 border rounded-r">
                        +
                      </button>

                      <div>
                        <img src={item.image} className='ml-4 w-16 h-16 rounded-lg' alt="Product Image" />
                      </div>
                    </div>
                    <span>{item.name}</span>
                  </div>

                  <div className="flex items-center">
                    <span className="font-semibold">€ {(item.price * item.qty).toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-600">
                      &times;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order details</h2>
            <div className="bg-white shadow rounded-lg p-4">
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>€ {totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Estimated Tax</span>
                <span>€ -</span>
              </div>
              <div className="flex justify-between py-2 font-semibold text-lg">
                <span>Total</span>
                <span>€ {totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-black text-white py-2 mt-4 rounded">
                GO TO CHECKOUT
              </button>
            </div>
          </div>

        </div>
      </div >
    </div>
  );
};

export default Cart;