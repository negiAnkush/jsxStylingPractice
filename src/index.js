//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
const heading = {
  color: "yellow",
  fontSize: "50px",
  fontWeight: "bold"
  //borderBottom: "5px solid black"
};
var greetingMsg = "";
const today = new Date();
const time = today.getHours();
if (time <= 12 && time >= 0) {
  greetingMsg = "Good morning";
  heading.color = "red";
} else if (time >= 12 && time <= 18) {
  greetingMsg = "Good afternoon";
  heading.color = "green";
} else if (time >= 18 && time <= 24) {
  greetingMsg = "Good evening";
}

ReactDOM.render(
  <div>
    <h1 style={heading}>{greetingMsg}</h1>
  </div>,
  document.getElementById("root")
);
