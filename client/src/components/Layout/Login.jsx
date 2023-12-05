import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8000/user/login",
        formData
      );
      localStorage.setItem("token", res?.data?.details?.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: res?.data?.details });

      const data = res?.data?.details;
      console.log("Hello    handleLogin   data:", data);

      if (res.status === 200) {
        setShowSuccessMessage("User successfully logged in!");
        setTimeout(() => {
          setShowSuccessMessage(false);
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setShowErrorMessage(
        err?.response?.data?.errorMssg || "Something went wrong!"
      );
    }
  };

  const { dispatch } = useContext(AuthContext);

  return (
    <div
      id="SigninRoot"
      className="bg-[#f8f8fa] flex flex-row justify-between pl-32 w-full items-start rounded-[20px]"
    >
      <div className="flex flex-col mt-24 gap-24 w-2/5 items-start">
        <div className="flex flex-col ml-32 gap-20 w-3/5 h-40 items-start">
          <div className="text-lg hover:cursor-pointer font-semibold">
            Husky<span className="text-primary">Events</span>
          </div>
          <div className="text-center text-4xl font-['Product_Sans'] font-bold">
            Sign In to Husky Events
          </div>
        </div>
        <div className="flex flex-col justify-between w-full h-[455px] items-start">
          <div className="flex flex-col gap-10 w-full items-start">
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="font-['Product_Sans']">YOUR EMAIL</div>
              <input
                type="text"
                id="email"
                className="text-xs font-['Product_Sans'] text-[#687c94] bg-white flex flex-row w-full h-12 items-start pt-4 px-2 rounded"
                placeholder="Enter your email"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col gap-4 w-full items-start">
              <div className="flex flex-row justify-between w-full items-start">
                <div className="font-['Product_Sans']">PASSWORD</div>
                <div className="font-['Product_Sans'] text-[#7e7e7e]">
                  <Link to="/signup">Forgot your password?</Link>
                </div>
              </div>
              <input
                type="password"
                id="password"
                className="text-xs font-['Product_Sans'] text-[#687c94] bg-white flex flex-row w-full h-12 items-start pt-4 px-2 rounded"
                placeholder="Enter your password"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            id="Button1"
            className="text-center font-['Product_Sans'] text-white bg-[#7848f4] flex flex-row justify-center ml-40 pt-3 w-2/5 h-10 cursor-pointer items-start rounded"
            onClick={handleLogin}
          >
            Sign In
          </button>

          {showSuccessMessage && (
            <div className="bg-green-200 p-4 rounded fixed  top-0 right-0 mt-4 mr-4">
              <p className="text-green-800">User successfully logged in!</p>
              <button
                className="text-sm text-gray-600 cursor-pointer focus:outline-none"
                onClick={() => setShowSuccessMessage(false)}
              >
                &#10006; {/* Unicode character for the 'X' cross */}
              </button>
            </div>
          )}

          {showErrorMessage && (
            <div className="bg-red-200 p-4 rounded fixed top-0 right-0 mt-4 mr-4">
              <p className="text-red-800">{showErrorMessage}</p>
              <button
                className="text-sm text-gray-600 cursor-pointer focus:outline-none"
                onClick={() => setShowErrorMessage(false)}
              >
                &#10006; {/* Unicode character for the 'X' cross */}
              </button>
            </div>
          )}
          <div className="text-center font-['Product_Sans'] text-[#7e7e7e] ml-[280px]">
            Or
          </div>
          <button
            id="GoogleButton"
            className="border-solid border-[#e0e0e9] bg-white flex flex-row justify-center ml-24 pt-3 gap-4 w-2/3 h-12 cursor-pointer items-start border rounded"
          >
            <img
              src="https://file.rendit.io/n/gOUxP7kZoh3lsXl6VD8b.svg"
              alt="Logo"
              id="Logo"
              className="w-6"
            />
            <div
              id="ButtonText"
              className="font-['Product_Sans'] text-[#131315] mt-1"
            >
              Sign up with Google
            </div>
          </button>
        </div>
      </div>
      <div
        id="UnsplashEVgsAbLRk"
        className="bg-[url(https://file.rendit.io/n/rxcirV5nTS5Vr5ZqlkUR.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-1/2 items-start"
      >
        <div className="bg-[rgba(19,_19,_21,_0.3)] flex flex-col justify-center pl-24 gap-10 w-full h-[900px] items-start">
          <div className="text-center text-4xl font-['Product_Sans'] font-bold text-white ml-20">
            Hello Friend
          </div>
          <div className="text-center font-['Product_Sans'] text-white">
            To keep connected with us provide us with your information{" "}
          </div>
          <Link to="/signup">
            <PrimaryButton
              id="Button2"
              className="bg-[#7848f4]  text-white font-bold py-2 px-4 rounded-full"
            >
              Sign Up
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
