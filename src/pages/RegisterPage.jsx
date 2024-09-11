import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { userSignUp, userLogout, userLoginWithGoogle } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;

    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':",.<>]).*$/;

    if (password.length < 6) {
      alert('Password should be minimum of 6 letters');
      form.reset();
      return;
    }
    else if (!regex.test(password)) {
      alert('Password should have atleast 1 Uppercase, 1 special character')
      form.reset();
      return;
    }

    userSignUp(email, password)
      .then((result) => {

        // * logOut after userSignUp so that automatic login doesn't happen
        userLogout()
          .then(() => {
          })
          .catch(error => console.log(error.message));

            navigate('/');
        form.reset();
      })
      .catch(error => {
      })
  }


  const handleGoogleLogin = () => {

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
    <div className="container mx-auto py-3">

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8">
          <div className='m-10'>
            <div className='text-center'>
              <p className='text-lg font-medium'>Welcome to </p>
              <h1 className="text-black text-4xl font-extrabold">Furni<span className="text-[#1E99F5]">Flex</span></h1>
              <p className="text-base mb-6 text-gray-500">Signup for purchase your desire products</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1">
                  <label htmlFor="first-name" className="block text-sm font-medium mb-2">First name (optional)</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder='First Name'
                    className="border border-gray-700 rounded-md px-4 py-2 w-full"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="last-name" className="block text-sm font-medium mb-2">Last name (optional)</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder='Last Name'
                    className="border border-gray-700 rounded-md px-4 py-2 w-full"
                  />
                </div>
              </div>
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
                Signup
              </button>

            </form>

            <div>
              <p className="text-center mt-4">Or</p>
              <div className="flex space-x-4">
                <button onClick={handleGoogleLogin} className="border border-gray-700 rounded-md px-4 py-2 w-full">Sign in with Google</button>
                <button className="border border-gray-700 rounded-md px-4 py-2 w-full">Sign in with Apple</button>
              </div>
              <p className="text-center mt-2">Have an account? <Link to={'/login'} className="text-blue-500 hover:text-blue-600 font-bold">Sign in</Link></p>
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
  );
};

export default RegisterPage;