import { useRouter } from "next/router";
import React from "react";

const Events = ({ eventList }) => {
  const router = useRouter();

  const fetchClient = async (category) => {
    router.push(`/events?category=${category}`);
  };

  return (
    <div>
      <h1>Event List</h1>

      <div>
        <button onClick={() => fetchClient("sports")}>Sports Event</button>
        <button onClick={() => fetchClient("food")}>Food Event</button>
        <button onClick={() => fetchClient("hentai")}>Hentai Event</button>
        <button onClick={() => router.push("/events")}>All</button>
      </div>

      {eventList.map((event) => (
        <div
          key={event.id}
          style={{ border: "1px solid black", margin: "5px", padding: "5px" }}
        >
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p style={{ margin: 0 }}>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;

export async function getServerSideProps(context) {
  const {
    query: { category },
  } = context;
  const queryString = category ? `category=${category}` : "";

  const res = await fetch(`http://localhost:8000/events?${queryString}`);
  const eventList = await res.json();

  return {
    props: {
      eventList,
    },
  };
}
