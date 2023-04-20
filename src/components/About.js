import React from "react";

function About(props) {
  return (
      <aside>
          <img src={props.img} alt="blog logo" />
          <p>{props.about}</p>
      </aside>
  )
  }
export default About;
