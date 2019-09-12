import React from 'react'

export default function QuestionList({ currentTopic, data }) {
  let questions;
  for(let i = 0; i < data.length; i++) {
    if(data[i].name === currentTopic) {
      questions = data[i].questions;
    } 
  }
  if(!questions) questions = [];

  return (
    <div className="question-box">
      {questions.map((q, i) => (<div className="question" key={q}>{i+1}. {q}</div>))}
    </div>
  )
}
