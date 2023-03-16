import { useState } from "react";
import axios from 'axios';
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {

  const [events, setEvents] = useState([]);

  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Event Name");
    const eventCategoryPrompt = prompt("Event Category");
    const eventDatePrompt = prompt("Event Date");
    const eventstatusPrompt = prompt("Status");
    const eventcreatedByPrompt = prompt("Created By");
    if (eventNamePrompt, eventCategoryPrompt, eventDatePrompt, eventstatusPrompt, eventcreatedByPrompt) {
       setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          //id: uuid(),
        },
        console.log(events)
      ]);
    }
  };
  const EventItem = ({ info }) => {
    const { event } = info;
    return (
      <div>
        <p>{event.title}</p>
      </div>
    );
  };
  return (
    <div>
      <h1>Calendar</h1>
      <FullCalendar
        editable
        selectable
        events={events}
        select={handleSelect}
        headerToolbar={{
          start: "today prev next",
          end: "dayGridMonth dayGridWeek dayGridDay",
        }}
        eventContent={(info) => <EventItem info={info} />}
        plugins={[daygridPlugin, interactionPlugin]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
      />
    </div>
  );
};

export default Calendar;