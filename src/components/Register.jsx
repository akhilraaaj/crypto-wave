import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../common/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LogoIcon } from '../icons/icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const navigate = useNavigate();
    const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById("registrationForm"); 
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if(user) {
            navigate("/home");
            toast.success('Welcome to Crypto Track', {
              position: toast.POSITION.TOP_CENTER
          });
        }
        else if(!user) {
          toast.error('Invalid Credentials, Please try again!!', {
            position: toast.POSITION.TOP_RIGHT
        });
        }
    }, [user, navigate]);

    console.log(user);
    return (
        <div className="bg-yellow-50 min-h-screen flex items-center justify-center">
        {/* <div className="bg-gray-50 flex rounded-2xl shadow-xl max-w-3xl p-5 items-center"> */}
        <div className="bg-gray-50 flex rounded-2xl ring-2 ring-gray-200 shadow-xl max-w-3xl p-5 items-center">
        <div className="md:block hidden w-1/2">
        <div className="text-4xl mb-4 mt-5 flex items-center font-bold text-gray-500">
            <span className="text-yellow-800">C</span>rypto<span className="text-yellow-800">T</span>racker<span className="ml-1 text-yellow-800 text-4xl"><LogoIcon /></span>
        </div>
            <img className="rounded-2xl mb-10" src="https://m.foolcdn.com/media/dubs/original_images/original_imageshttpsg.foolcdn.comeditorialimages655229gettyimages-cryptocu.jpg" />
          </div>
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="mt-1 text-center font-bold text-2xl text-[#002D74]">Register</h2>
      
            <form id="registrationForm" onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className="p-2 mt-4 rounded-xl border bg-white" type="text" name="name" placeholder="Name" />
              <input className="p-2 rounded-xl border bg-white" type="email" name="email" placeholder="Email" />
              <div className="relative">
                <input className="p-2 rounded-xl border w-full bg-white" type="password" name="password" placeholder="Password" />
                <input className="p-2 mt-4 rounded-xl border w-full bg-white" type="password" name="password" placeholder="Confirm Password" />
                
              </div>
              <button className="bg-[#002D74] rounded-xl text-white py-2 mb-6 hover:scale-105 duration-300">Register</button>
            </form>

          </div>
          
        </div>
      </div>
         
        
        );
}