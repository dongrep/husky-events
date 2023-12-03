import DefaultLayout from "../components/Layout/DefaultLayout";
import EventSearch from "../components/Event/EventSearch";
import EventCard from "../components/Event/EventCard";

const Events = () => {
  const eventsJSON = [
    {
      name: "Sample Event 1",
      description: "This is a sample event description.",
      userAdmin: "user123",
      scheduleTime: "2023-11-21T14:30:00Z",
      duration: "PT2H",
      location: "Event Venue 1",
      images: ["/event.jpg", "image2.jpg"],
      socialLinks: [
        "https://twitter.com/event1",
        "https://facebook.com/event1",
      ],
      tags: ["tag1", "tag2"],
      cost: 25.99,
    },
    {
      name: "Sample Event 2",
      description: "Another sample event description.",
      userAdmin: "user456",
      scheduleTime: "2023-12-05T18:00:00Z",
      duration: "PT3H",
      location: "Event Venue 2",
      images: ["/event.jpg", "image4.jpg"],
      socialLinks: [
        "https://twitter.com/event2",
        "https://facebook.com/event2",
      ],
      tags: ["tag3", "tag4"],
      cost: "free",
    },
    {
      name: "Sample Event 3",
      description: "This is a sample event description.",
      userAdmin: "user123",
      scheduleTime: "2023-11-21T14:30:00Z",
      duration: "PT2H",
      location: "Event Venue 1",
      images: ["/event.jpg", "image2.jpg"],
      socialLinks: [
        "https://twitter.com/event1",
        "https://facebook.com/event1",
      ],
      tags: ["tag1", "tag2"],
      cost: 25.99,
    },
    {
      name: "Sample Event 4",
      description: "Another sample event description.",
      userAdmin: "user456",
      scheduleTime: "2023-12-05T18:00:00Z",
      duration: "PT3H",
      location: "Event Venue 2",
      images: ["/event.jpg", "image4.jpg"],
      socialLinks: [
        "https://twitter.com/event2",
        "https://facebook.com/event2",
      ],
      tags: ["tag3", "tag4"],
      cost: "free",
    },
    {
      name: "Sample Event 5",
      description: "This is a sample event description.",
      userAdmin: "user123",
      scheduleTime: "2023-11-21T14:30:00Z",
      duration: "PT2H",
      location: "Event Venue 1",
      images: ["/event.jpg", "image2.jpg"],
      socialLinks: [
        "https://twitter.com/event1",
        "https://facebook.com/event1",
      ],
      tags: ["tag1", "tag2"],
      cost: 25.99,
    },
    {
      name: "Sample Event 6",
      description: "Another sample event description.",
      userAdmin: "user456",
      scheduleTime: "2023-12-05T18:00:00Z",
      duration: "PT3H",
      location: "Event Venue 2",
      images: ["/event.jpg", "image4.jpg"],
      socialLinks: [
        "https://twitter.com/event2",
        "https://facebook.com/event2",
      ],
      tags: ["tag3", "tag4"],
      cost: "free",
    },
    {
      name: "Sample Event 7",
      description: "This is a sample event description.",
      userAdmin: "user123",
      scheduleTime: "2023-11-21T14:30:00Z",
      duration: "PT2H",
      location: "Event Venue 1",
      images: ["/event.jpg", "image2.jpg"],
      socialLinks: [
        "https://twitter.com/event1",
        "https://facebook.com/event1",
      ],
      tags: ["tag1", "tag2"],
      cost: 25.99,
    },
    {
      name: "Sample Event 8",
      description: "Another sample event description.",
      userAdmin: "user456",
      scheduleTime: "2023-12-05T18:00:00Z",
      duration: "PT3H",
      location: "Event Venue 2",
      images: ["/event.jpg", "image4.jpg"],
      socialLinks: [
        "https://twitter.com/event2",
        "https://facebook.com/event2",
      ],
      tags: ["tag3", "tag4"],
      cost: "free",
    },
    {
      name: "Sample Event 9",
      description: "This is a sample event description.",
      userAdmin: "user123",
      scheduleTime: "2023-11-21T14:30:00Z",
      duration: "PT2H",
      location: "Event Venue 1",
      images: ["/event.jpg", "image2.jpg"],
      socialLinks: [
        "https://twitter.com/event1",
        "https://facebook.com/event1",
      ],
      tags: ["tag1", "tag2"],
      cost: 25.99,
    },
    {
      name: "Sample Event 10",
      description: "Another sample event description.",
      userAdmin: "user456",
      scheduleTime: "2023-12-05T18:00:00Z",
      duration: "PT3H",
      location: "Event Venue 2",
      images: ["/event.jpg", "image4.jpg"],
      socialLinks: [
        "https://twitter.com/event2",
        "https://facebook.com/event2",
      ],
      tags: ["tag3", "tag4"],
      cost: "free",
    },
    {
      name: "Sample Event 11",
      description: "This is a sample event description.",
      userAdmin: "user123",
      scheduleTime: "2023-11-21T14:30:00Z",
      duration: "PT2H",
      location: "Event Venue 1",
      images: ["/event.jpg", "image2.jpg"],
      socialLinks: [
        "https://twitter.com/event1",
        "https://facebook.com/event1",
      ],
      tags: ["tag1", "tag2"],
      cost: 25.99,
    },
    {
      name: "Sample Event 12",
      description: "Another sample event description.",
      userAdmin: "user456",
      scheduleTime: "2023-12-05T18:00:00Z",
      duration: "PT3H",
      location: "Event Venue 2",
      images: ["/event.jpg", "image4.jpg"],
      socialLinks: [
        "https://twitter.com/event2",
        "https://facebook.com/event2",
      ],
      tags: ["tag3", "tag4"],
      cost: "free",
    },
  ];

  return (
    <DefaultLayout>
      <div className="relative w-full h-full">
        <div className="w-full mt-4 mb-12 relative h-36 lg:h-[595px] bg-yellow-600 rounded-md overflow-hidden">
          <img
            src={"/hero.jpeg"}
            className="rounded-md overflow-clip layout-fill object-cover w-full h-full"
            alt="event"
          />
          <div className="absolute top-36 flex w-full justify-center text-white text-xl lg:text-4xl font-bold">
            <div className="flex flex-col">
              <div className="text-center">MADE FOR THOSE</div>
              <div className="text-center">WHO DO</div>
            </div>
          </div>
        </div>
        <div className="absolute lg:flex top-[25%] hidden w-full justify-center">
          <EventSearch />
        </div>
        <div className="lg:px-16 mt-4 lg:mt-24 ">
          <div className="text-lg font-semibold mb-6 mx-4">
            Upcoming <span className="text-primary">Events</span>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-4 gap-x-5 grid-cols-1 justify-between">
            {eventsJSON.map((event) => (
              <EventCard key={event.name} event={event} />
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Events;
