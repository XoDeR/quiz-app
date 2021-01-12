import React, { useState } from 'react';

export default function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	
	{/* Questions taken from https://github.com/lydiahallie/javascript-questions#readme */}
	const questions = [
		{
			questionText: `What is the output?
							function sayHi() {
								console.log(name);
								console.log(age);
								var name = 'Lydia';
								let age = 21;
			  				}
			  
			  				sayHi();`,
			answerOptions: [
				{ answerText: 'Lydia and undefined', isCorrect: false },
				{ answerText: 'Lydia and ReferenceError', isCorrect: false },
				{ answerText: 'ReferenceError and 21', isCorrect: false },
				{ answerText: 'undefined and ReferenceError', isCorrect: true },
			],
		},
		{
			questionText: `What's the output?
			for (var i = 0; i < 3; i++) {
			  setTimeout(() => console.log(i), 1);
			}
			
			for (let i = 0; i < 3; i++) {
			  setTimeout(() => console.log(i), 1);
			}`,
			answerOptions: [
				{ answerText: '0 1 2 and 0 1 2', isCorrect: false },
				{ answerText: '0 1 2 and 3 3 3', isCorrect: false },
				{ answerText: '3 3 3 and 0 1 2', isCorrect: true },
				{ answerText: '3 3 3 and 3 3 3', isCorrect: false },
			],
		},
		{
			questionText: `What's the output?
			const shape = {
			  radius: 10,
			  diameter() {
				return this.radius * 2;
			  },
			  perimeter: () => 2 * Math.PI * this.radius,
			};
			
			console.log(shape.diameter());
			console.log(shape.perimeter());`,
			answerOptions: [
				{ answerText: '20 and 62.83185307179586', isCorrect: false },
				{ answerText: '20 and NaN', isCorrect: true },
				{ answerText: '20 and 63', isCorrect: false },
				{ answerText: 'NaN and 63', isCorrect: false },
			],
		},
		{
			questionText: `What's the output?
			+true;
			!'Lydia';`,
			answerOptions: [
				{ answerText: '1 and false', isCorrect: true },
				{ answerText: 'false and NaN', isCorrect: false },
				{ answerText: 'false and false', isCorrect: false },
				{ answerText: '1 and NaN', isCorrect: false },
			],
		},
	];

	const handleAnswerButtonClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption, index) => (
							<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
