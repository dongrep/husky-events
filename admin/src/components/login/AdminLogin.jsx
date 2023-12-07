import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import FormInput from "../formInput/FormInput";
import Modal from "../Modals/Modal";

export default function Login() {
  const { dispatch, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [showMessage, setShowMessage] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    const formData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:8000/user/loginAdmin",
        formData
      );
      localStorage.setItem("token", res?.data?.details?.token);

      if (res.statusText === "OK") {
        setSuccess(true);
        setShowMessage("User successfully logged in!");
        setTimeout(() => {
          setSuccess(false);
          dispatch({ type: "LOGIN_SUCCESS", payload: res?.data?.details });
          navigate("/");
        }, 2000);
      } else {
        setError(true);
        setShowMessage("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err?.response?.data });
      setError(true);
      setShowMessage(err?.response?.data?.errorMssg || "Something went wrong!");
    }
  };

  const updateModals = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <div
      id="SigninRoot"
      onClick={updateModals}
      className="flex container h-screen overflow-auto mx-auto w-full"
    >
      {error && (
        <Modal
          title="Error"
          message={showMessage}
          onClose={() => setError(false)}
        />
      )}
      {success && (
        <Modal
          title="Success"
          message={showMessage}
          onClose={() => setSuccess(false)}
        />
      )}
      <div className="flex lg:flex-1 px-8 py-5 flex-col gap-24 w-full justify-center bg-gray-800">
        <div className="flex flex-col items-start">
          <div className="flex items-center text-4xl font-bold text-center">
            Admin Dashboard Login
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col gap-10 w-full justify-center items-center">
            <div className="flex flex-col gap-4 w-full items-start text-xl">
              <FormInput
                label="Email"
                value={email}
                setValue={setEmail}
                placeholder={"Your Email"}
              />
            </div>
            <div className="flex flex-col gap-4 w-full items-start text-xl">
              <FormInput
                type="password"
                label="Password"
                value={password}
                setValue={setPassword}
                placeholder={"Your Password"}
              />
            </div>
            <PrimaryButton
              id="sign_in"
              buttonWidth={"w-1/2"}
              onClick={handleLogin}
            >
              Login
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div
        id="UnsplashEVgsAbLRk"
        className="hidden lg:flex bg-[url(https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644201.jpg?w=1380&t=st=1701831166~exp=1701831766~hmac=e3272e78d5aa30685f7b3a36b996e6741c785569451d38cdfe5c275f4f7112dd)] bg-contain h-full w-full flex-1"
      >
        <div className="flex bg-blue-400/30 flex-col gap-10 justify-center w-full h-full items-center">
          <div className="text-center text-4xl font-bold text-black mt-10">
            Hey there! Husky
          </div>
          <div className="text-center text-black font-semibold">
            Welcome, Admin! To maintain your connection with us, please sign up
            using your Northeastern email.
          </div>
        </div>
      </div>
    </div>
  );
}
