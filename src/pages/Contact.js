import React from "react";
import { Link, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import Learn from "./Learn";

function Contact(props) {
  return (
    <div>
      <h1>Contact me</h1>
      < ContactUs />      
    </div>
  );
}

export default Contact;
