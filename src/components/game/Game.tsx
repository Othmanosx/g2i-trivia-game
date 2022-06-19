import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchQuestionsQuery } from 'redux/questionsApiSlice';
import { RootState } from 'redux/store';

import QuestionCard from './QuestionCard';
import ResultsCard from './ResultsCard';

const Game = () => {
  const { data: questions = [], refetch, isFetching, isError } = useFetchQuestionsQuery();

  // fetch new questions when the game is reloaded or the page is refreshed
  useEffect(() => {
    refetch();
  }, [refetch]);

  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const answers = useSelector((state: RootState) => state.answers);
  const currentQuestion = questions[currentQuestionId];

  if (isFetching) return <div>Loading...</div>;
  if (isError) return <div>Something Wrong Happened, Please try again</div>;

  if (currentQuestionId + 1 > questions.length)
    return <ResultsCard answers={answers.answers} numCorrect={answers.correct_answers} />;

  return (
    <QuestionCard
      question={currentQuestion}
      questionsNum={questions.length}
      currentQuestionId={currentQuestionId}
      setCurrentQuestionId={setCurrentQuestionId}
    />
  );
};

export default Game;
