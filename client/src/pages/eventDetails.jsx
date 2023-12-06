import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/Layout/DefaultLayout";
import EventDetailsComponent from "../components/Event/EventDetailsComponent";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [event, setEvent] = useState();

  const fetchEvent = async () => {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:8000/event/getevent?_id=${id}`,
    );
    const data = await response.data;
    console.log(data);
    setEvent(data);
    setLoading(false);
  };

  useEffect(() => {
    if (event) return;
    fetchEvent();
  }, [event]);

  return (
    <DefaultLayout>
      {loading ? (
        <Loader />
      ) : (
        <EventDetailsComponent currentEvent={event} fetchEvent={fetchEvent} />
      )}
    </DefaultLayout>
  );
};

export default EventDetails;
