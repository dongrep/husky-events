import React, { useContext, useEffect } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import EventForm from "../components/EventCreation/EventForm";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const EventCreation = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <DefaultLayout>
      <EventForm />
    </DefaultLayout>
  );
};

export default EventCreation;
