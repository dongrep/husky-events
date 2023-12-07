import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import FormInput from "../Event/FormInput";
import Modal from "../Modals/Modal";
import DefaultLayout from "./DefaultLayout";

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
        "http://localhost:8000/user/login",
        formData
      );
      localStorage.setItem("token", res?.data?.details?.token);

      if (res.statusText === "OK") {
        dispatch({ type: "LOGIN_SUCCESS", payload: res?.data?.details });
        setSuccess(true);
        setShowMessage("User successfully logged in!");
        setTimeout(() => {
          setSuccess(false);
          navigate("/");
        }, 2000);
      } else {
        setError(true);
        setShowMessage("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setError(true);
      setShowMessage(err?.response?.data?.errorMssg || "Something went wrong!");
    }
  };

  const updateModals = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <DefaultLayout>
      <div
        id="SigninRoot"
        onClick={updateModals}
        className="bg-[#f8f8fa] flex justify-between container h-screen overflow-auto mx-auto my-5 w-full"
      >
        {error && <Modal title="Error" message={showMessage} />}
        {success && <Modal title="Success" message={showMessage} />}
        <div className="flex lg:flex-1 px-8 py-5 flex-col gap-24 w-full justify-center">
          <div className="flex flex-col items-start">
            <div className="flex items-center text-4xl font-bold">Sign In</div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col gap-10 w-full justify-center items-center">
              <div className="flex flex-col gap-4 w-full items-start">
                <FormInput
                  label="Email"
                  value={email}
                  setValue={setEmail}
                  placeholder={"Your Email"}
                />
              </div>
              <div className="flex flex-col gap-4 w-full items-start">
                <FormInput
                  label="Password"
                  value={password}
                  type="password"
                  setValue={setPassword}
                  placeholder={"Your Password"}
                />
              </div>
              <PrimaryButton
                id="sign_in"
                buttonWidth={"w-1/2"}
                onClick={handleLogin}
              >
                Sign In
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div
          id="UnsplashEVgsAbLRk"
          className="hidden lg:flex bg-[url(https://file.rendit.io/n/rxcirV5nTS5Vr5ZqlkUR.png)] bg-cover h-full w-full flex-1"
        >
          <div className="flex bg-gray-600/60 flex-col gap-10 justify-center w-full h-full items-center">
            <div className="text-center text-4xl font-bold text-white">
              Hey there Husky,
            </div>
            <div className="text-center text-white">
              To keep connected with us sign up with your Northeastern email
            </div>
            <Link className="w-full flex justify-center" to="/signup">
              <PrimaryButton buttonWidth={"w-1/2 "}>Sign Up</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
