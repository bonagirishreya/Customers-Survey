// components/Survey.js
import React, { useState, useEffect } from 'react';
import Question from './Question';

const questions = [
  { id: 1, text: 'How satisfied are you with our products?', type: 'rating', scale: 5 },
  { id: 2, text: 'How fair are the prices compared to similar retailers?', type: 'rating', scale: 5 },
  { id: 3, text: 'How satisfied are you with the value for money of your purchase?', type: 'rating', scale: 5 },
  { id: 4, text: 'On a scale of 1-10 how would you recommend us to your friends and family?', type: 'rating', scale: 10 },
  { id: 5, text: 'What could we do to improve our service?', type: 'text' },
];

const Survey = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(() => {
    // Load answers from localStorage if available
    const savedAnswers = localStorage.getItem('surveyAnswers');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  const handleAnswerChange = (questionId, answer) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    // Save the answers to localStorage
    localStorage.setItem('surveyAnswers', JSON.stringify(newAnswers));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    alert('Survey completed! Thank you for your feedback.');
    // Mark the survey as completed in localStorage
    localStorage.setItem('surveyCompleted', 'true');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Question
        question={currentQuestion}
        currentAnswer={answers[currentQuestion.id] || ''}
        onAnswerChange={handleAnswerChange}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleSubmit}>Submit Survey</button>
      )}
    </div>
  );
};

export default Survey;
