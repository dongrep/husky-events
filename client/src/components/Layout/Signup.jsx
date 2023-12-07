import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { performAllValidation } from "../../services/helper";
import FormInput from "../Event/FormInput";
import Modal from "../Modals/Modal";
import DefaultLayout from "./DefaultLayout";
import { AuthContext } from "../../context/authContext";

export default function Signup() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [showMessage, setShowMessage] = useState("");

  if (user) {
    navigate("/");
  }

  const handleSignup = async () => {
    try {
      const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        phone: phone,
        role: "organizer",
      };

      performAllValidation(formData);

      const response = await fetch("http://localhost:8000/user/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setShowMessage("User created successfully");
        setTimeout(() => {
          setSuccess(false);
          navigate("/login");
        }, 2000);

        // Redirect or perform any other action on successful signup
      } else {
        setError(true);
        setShowMessage(
          "Signup failed. Please check your information and try again."
        );
        console.error(`Error: ${data.message}`);
        // Handle error, show message to the user, etc.
      }
    } catch (error) {
      setError(true);
      setShowMessage("An unexpected error occurred. Please try again later.");
      console.error("Error:", error);
      // Handle network errors or other exceptions
    }
  };

  const updateModals = () => {
    setError(false);
    setSuccess(false);
  };

  return (
    <DefaultLayout>
      <div
        onClick={updateModals}
        className="container my-5 mx-auto flex h-screen w-full items-start"
      >
        {error && <Modal title="Error" message={showMessage} />}
        {success && <Modal title="Success" message={showMessage} />}
        <div className="lg:flex hidden bg-[url(https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover flex-1 h-full overflow-auto w-full items-start">
          <div className="bg-gray-700/70 flex flex-col justify-center gap-10 w-full h-full items-center">
            <div className="text-center text-4xl font-bold text-white">
              Welcome back
            </div>
            <div className="text-center text-white">
              To keep connected with us, provide us with your information
            </div>
            <Link className="w-full flex justify-center" to="/login">
              <PrimaryButton buttonWidth={"w-1/2"}>Sign In</PrimaryButton>
            </Link>
          </div>
        </div>

        <div className="flex lg:flex-1 pt-40 py-10 px-8 flex-col gap-12 h-full overflow-y-scroll w-full justify-center">
          <div className="flex items-center text-4xl font-bold">Sign Up</div>
          <div className="flex w-full">
            <div className="flex flex-col gap-8 w-full justify-center items-center">
              <FormInput
                label="First Name"
                value={firstName}
                setValue={setFirstName}
                placeholder={"Your First Name"}
              />

              <FormInput
                label="Last Name"
                value={lastName}
                setValue={setLastName}
                placeholder={"Your Last Name"}
              />

              <FormInput
                label="Email"
                value={email}
                setValue={setEmail}
                placeholder={"Your Email"}
              />

              <FormInput
                label="Phone"
                type="tel"
                value={phone}
                setValue={setPhone}
                placeholder={"Your Phone Number"}
              />

              <FormInput
                label="Password"
                value={password}
                type="password"
                setValue={setPassword}
                placeholder={"Your Password"}
                obscureText={true}
              />

              <FormInput
                label="Confirm Password"
                value={confirmPassword}
                type="password"
                setValue={setConfirmPassword}
                placeholder={"Confirm Password"}
                obscureText={true}
              />

              <PrimaryButton
                id="sign_up"
                buttonWidth={"w-1/2"}
                onClick={handleSignup}
              >
                Sign Up
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
