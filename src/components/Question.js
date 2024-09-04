// components/Question.js
import React from 'react';
import '../App.css';

const Question = ({ question, currentAnswer, onAnswerChange, onNext, onPrev }) => {
  const handleChange = (value) => {
    onAnswerChange(question.id, value);
  };

  return (
    <div className="question">
      <h3>{question.text}</h3>
      {question.type === 'rating' && (
        <div>
          {Array.from({ length: question.scale }, (_, i) => i + 1).map((value) => (
            <button
              key={value}
              className={`rating-button ${currentAnswer === value.toString() ? 'selected' : ''}`}
              onClick={() => handleChange(value.toString())}
            >
              {value}
            </button>
          ))}
        </div>
      )}
      {question.type === 'text' && (
        <textarea value={currentAnswer} onChange={(e) => handleChange(e.target.value)} />
      )}
      <div>
        <button id="prev" onClick={onPrev}>Prev</button>
        <button id="next" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Question;
