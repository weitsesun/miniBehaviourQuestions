import React, { useState } from 'react';
import SectionBar from './SectionBar';
import QuestionList from './QuestionList';
import data from './questions';
import './App.css';


function App() {
  const [currentTopic, setCurrentTopic] = useState("teamwork");

  function setTopic(input) {
    setCurrentTopic(input);
  }

  return (
    <div className="App">
      <SectionBar currentTopic={currentTopic} setTopic={setTopic}/>
      <QuestionList currentTopic={currentTopic} data={data}/>
    </div>
  );
}

export default App;
