import React from 'react';
import { useNavigate } from 'react-router-dom';
import { answersClear } from 'redux/answersSlice';
import { Question } from 'redux/questionsApiSlice';
import { useAppDispatch } from 'redux/store';

type Props = {
  answers: Question[];
  numCorrect: number;
};
const ResultsCard = ({ answers, numCorrect }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const playAgain = () => {
    dispatch(answersClear());
    navigate('/');
  };

  return (
    <div className="results-card">
      <h1>Results</h1>
      <h2>
        You scored {numCorrect}/{answers?.length}
      </h2>
      <ul style={{ textAlign: 'left' }}>
        {answers?.map((answer: any, i: number) => (
          <li key={i} className={answer.correct ? 'correct' : 'wrong'}>
            <h4>{`${answer.question}`}</h4>
          </li>
        ))}
      </ul>
      <button onClick={playAgain}>Play again?</button>
    </div>
  );
};

export default ResultsCard;
