import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const LogInPage = () => {


  const { userLogin, userLoginWithGoogle, userLoginWithApple } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then(result => {

        Swal.fire({
          icon: 'success',
          title: 'Logged In Successfully',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset();
        navigate('/homestore/rockingchairs');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid email or password!',
        })
        form.reset();
      })
  }

  const handleLoginWithApple = () => {
    userLoginWithApple()
      .then((result) => {

        Swal.fire({
          icon: 'success',
          title: 'Logged In Successfully',
          showConfirmButton: false,
          timer: 1500
        })

        navigate('/homestore/rockingchairs');
      })
      .catch(error =>
        console.log(error.message)
      )
  }

  const handleLoginWithGoogle = () => {

    userLoginWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Logged In Successfully',
          showConfirmButton: false,
          timer: 1500
        })

        navigate('/homestore/rockingchairs');
      })
      .catch(error => {
      })
  }

  return (
    <div>
      <div className="container mx-3">

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8">
            <div className='m-10'>
              <div className='text-center'>
                <h1 className="text-black text-4xl font-extrabold">Welcome Back!</h1>
                <p className="text-base mb-6 text-gray-500">Enter your credentials to access your account</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">

                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder='Email Address'
                    required
                    className="border border-gray-700 rounded-md px-4 py-2 w-full" />
                </div>
                <div className="flex-1">
                  <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder='Password'
                    required
                    className="border border-gray-700 rounded-md px-4 py-2 w-full" />
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    id="terms-and-policy"
                    name="terms-and-policy"
                    className="mr-2"
                  />
                  <label htmlFor="terms-and-policy" className="text-sm">I agree to the Terms & Policy</label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full"
                >
                  Sign In
                </button>

              </form>

              <div>
                <p className="text-center mt-4">Or</p>
                <div className="flex space-x-4">
                  <button
                    onClick={handleLoginWithGoogle}
                    className="border border-gray-700 rounded-md px-4 py-2 w-full"
                  >
                    Sign in with Google
                  </button>
                  <button onClick={handleLoginWithApple} className="border border-gray-700 rounded-md px-4 py-2 w-full">Sign in with Apple</button>
                </div>
                <p className="text-center mt-2">Don't have an account? <Link to={'/'} className="text-blue-500 hover:text-blue-600 font-bold">Sign Up</Link></p>
              </div>
            </div>
          </div>

          <div className="bg-[url('/assets/SignUpBanner.jpeg')] bg-cover md:w-1/2 flex justify-center items-center">
            <div className='text-center text-white'>
              <p className="text-white text-4xl font-extrabold">Furni<span className="text-[#1E99F5]">Flex</span></p>
              <p className='px-10 py-10'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;