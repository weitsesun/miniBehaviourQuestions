import React, { useState, useEffect } from 'react'

export default function SectionBar({currentTopic, setTopic }) {

  const select = { 
    backgroundColor: "rgba(28, 35, 82, 0.9)",
    fontWeight: "bold", 
  };

  const [ groupStyle, setGroupStyle ] = useState({
    "teamwork": {},
    "client-facing": {},
    "adapt": {},
    "time-management": {},
    "communication": {},
    "motivation": {},
  });
  
  return (
    <div className="section-bar-box">
      {currentTopic === "teamwork" ? 
        <button className="teamwork" onClick={(e) => setTopic(e.target.className)} style={select}>Teamwork</button>
      : <button className="teamwork" onClick={(e) => setTopic(e.target.className)}>Teamwork</button> }
      {currentTopic === "client-facing" ? 
      <button className="client-facing" onClick={(e) => setTopic(e.target.className)} style={select}>Client-facing Skills</button>
    : <button className="client-facing" onClick={(e) => setTopic(e.target.className)}>Client-facing Skills</button>}

      {currentTopic === "adapt" ? 
      <button className="adapt" onClick={(e) => setTopic(e.target.className)} style={select}>Ability to Adapt</button>
    : <button className="adapt" onClick={(e) => setTopic(e.target.className)}>Ability to Adapt</button> }

      {currentTopic === "time-management" ? 
      <button className="time-management" onClick={(e) => setTopic(e.target.className)} style={select}>Time Management Skills</button>
    : <button className="time-management" onClick={(e) => setTopic(e.target.className)}>Time Management Skills</button>}

      {currentTopic === "communication" ? 
      <button className="communication" onClick={(e) => setTopic(e.target.className)} style={select}>Communication Skills</button>
    : <button className="communication" onClick={(e) => setTopic(e.target.className)}>Communication Skills</button>}

      {currentTopic === "motivation" ? 
      <button className="motivation" onClick={(e) => setTopic(e.target.className)} style={select}>Motivation and Values</button>
    : <button className="motivation" onClick={(e) => setTopic(e.target.className)}>Motivation and Values</button>}
    </div>
  )
}
