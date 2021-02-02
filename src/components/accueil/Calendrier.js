import React from "react";

function Calendrier() {
  return (
    <div>
      <h3>Calendrier des évènements</h3>
      <br />
      <iframe
        src="https://calendar.google.com/calendar/embed?height=300&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FAmsterdam&amp;src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23E67C73&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
        title="Events"
        width="300"
        height="300"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}

export default Calendrier;
