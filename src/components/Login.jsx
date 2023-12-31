/* eslint-disable react/no-unescaped-entities */
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LogoIcon } from '../icons/icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const navigate = useNavigate();

    const [ signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [ signInWithGoogle, gUser ] = useSignInWithGoogle(auth);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById("loginForm"); 
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(name, email, password);
        signInWithEmailAndPassword(email, password);
    
      };

    useEffect(() => {
        if(user || gUser) {
            navigate("/home");
            toast.success('Welcome to Crypto Wave', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }, [user, gUser, navigate]);

    console.log(user);
    return (
        <div className="bg-yellow-50 min-h-screen flex items-center justify-center">
        {/* <div className="bg-gray-50 flex rounded-2xl shadow-xl max-w-3xl p-5 items-center"> */}
        <div className="bg-gray-50 flex rounded-2xl ring-2 ring-gray-200 shadow-xl max-w-3xl p-5 items-center">
        <div className="md:block hidden w-1/2">
        <div className="text-4xl mb-10 flex items-center font-bold text-gray-500">
            <span className="text-yellow-800">C</span>rypto<span className="text-yellow-800">W</span>ave<span className="ml-1 text-yellow-800 text-4xl"><LogoIcon /></span>
        </div>
            <img className="rounded-2xl" src="https://m.foolcdn.com/media/dubs/original_images/original_imageshttpsg.foolcdn.comeditorialimages655229gettyimages-cryptocu.jpg" />
          </div>
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="mt-4 text-center font-bold text-2xl text-[#002D74]">Login</h2>
      
            <form id="loginForm" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className="p-2 mt-7 rounded-xl border bg-white" type="email" name="email" placeholder="Email" />
              <div className="relative">
                <input className="p-2 rounded-xl border w-full bg-white" type="password" name="password" placeholder="Password" />
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
            </form>
      
            <div className="mt-5 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
      
            <button className="bg-white border py-2 w-full rounded-xl mt-2 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]" onClick={() => signInWithGoogle()}>
              <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              Login with Google
            </button>
      
            <div className="mt-1 text-xs border-b border-[#002D74] py-2 text-[#002D74]">
            </div>
      
            <div className="mt-2 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300" onClick={() => navigate('/register')}>Register</button>
            </div>
          </div>
          
        </div>
      </div>
              

    );
}
