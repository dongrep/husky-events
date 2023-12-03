import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PrimaryButton from "../Button/PrimaryButton";
import { performAllValidation } from '../../services/helper';

export default function Signup() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: '',
  });

  // Function to handle form submission
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3002/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      performAllValidation({ body: formData });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessMessage('User created successfully');
        setTimeout(() => {
          setShowSuccessMessage(false);
          navigate('/login');
        }, 2000);
        
        // Redirect or perform any other action on successful signup
      } else {
        console.error(`Error: ${data.message}`);
        // Handle error, show message to the user, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors or other exceptions
    }
  };
  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
 return (
    <div id="NewRootRoot" className="flex flex-row w-full items-start">
      <div className="bg-[rgba(19,_19,_21,_0.3)] flex flex-row w-full items-start">
        <div
          id="UnsplashUCbMZSw"
          className="bg-[url(https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center pl-24 gap-10 w-full h-[900px] items-start"
        >
          <div className="text-center text-4xl font-['Product_Sans'] font-bold text-white ml-16">
            Welcome back
          </div>
          <div className="text-center font-['Product_Sans'] text-white">
            To keep connected with us, provide us with your information
          </div>
          <Link to="/login">
            <PrimaryButton id="Button1" className="bg-[#7848f4] text-white font-bold py-2 px-4 rounded-full">
              Sign In
            </PrimaryButton>
          </Link>
        </div>
      </div>

      <div className="bg-[#f8f8fa] flex flex-col justify-center gap-16 w-full items-start px-32 py-24">
        <div className="flex flex-col ml-[113px] gap-10 w-3/5 h-[113px] items-start">
          <div className="text-lg hover:cursor-pointer font-semibold">
            Husky<span className="text-primary">Events</span>
          </div>

          <div className="text-lg hover:cursor-pointer font-semibold">
            Sign Up for Husky Events
          </div>
        </div>
        <div className="flex flex-col justify-between gap-10 w-full items-start">
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">FIRST NAME</div>
            <input
              type="text"
              id="firstName"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your first name"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">LAST NAME</div>
            <input
              type="text"
              id="lastName"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your last name"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">EMAIL</div>
            <input
              type="email"
              id="email"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your email"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">PASSWORD</div>
            <input
              type="password"
              id="password"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your password"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">CONFIRM PASSWORD</div>
            <input
              type="password"
              id="confirmPassword"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Confirm your password"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">PHONE</div>
            <input
              type="tel"
              id="phone"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your phone number"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="font-['Product_Sans'] uppercase">ROLE</div>
            <input
              type="text"
              id="role"
              className="text-xs font-['Product_Sans'] text-[#687c94] bg-white w-full h-12 px-2 rounded"
              placeholder="Enter your role"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col justify-between ml-24 w-2/3 h-[175px] items-start">
            <button
              id="Button1"
              className="text-center font-['Product_Sans'] text-white bg-[#7848f4] flex flex-row justify-center ml-16 pt-3 w-2/3 h-10 cursor-pointer items-start rounded"
              onClick={handleSignup}
            >
              Sign Up
            </button>
            {showSuccessMessage && (
          <div className="bg-green-200 p-4 rounded fixed  top-0 right-0 mt-4 mr-4">
            <p className="text-green-800">User created successfully</p>
            <button
              className="text-sm text-gray-600 cursor-pointer focus:outline-none"
              onClick={() => setShowSuccessMessage(false)}
            >
              &#10006; {/* Unicode character for the 'X' cross */}
            </button>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
}