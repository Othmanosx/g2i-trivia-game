import React, { Dispatch } from 'react';
import { answerAdd } from 'redux/answersSlice';
import { Question } from 'redux/questionsApiSlice';
import { useAppDispatch } from 'redux/store';

type Props = {
  question: Question;
  questionsNum: number;
  currentQuestionId: number;
  setCurrentQuestionId: Dispatch<React.SetStateAction<number>>;
};

const QuestionCard = ({
  question,
  questionsNum,
  currentQuestionId,
  setCurrentQuestionId,
}: Props) => {
  const dispatch = useAppDispatch();

  const answer = (answer: string) => {
    if (question.correct_answer.toLowerCase() === answer) {
      dispatch(answerAdd({ ...question, correct: true }));
    } else {
      dispatch(answerAdd({ ...question, correct: false }));
    }
    setCurrentQuestionId(currentQuestionId + 1);
  };

  return (
    <>
      <h2>{question.category}</h2>
      <div className="question-card">
        <div className="question">
          <p>{`${question.question}`}</p>
          <button onClick={() => answer('true')}>True</button>
          <button onClick={() => answer('false')}>False</button>
        </div>
        <h5>
          Question {currentQuestionId + 1} of {questionsNum}
        </h5>
      </div>
    </>
  );
};

export default QuestionCard;
