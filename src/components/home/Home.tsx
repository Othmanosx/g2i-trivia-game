import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { answersClear } from 'redux/answersSlice';

const Home = () => {
  const dispatch = useDispatch();
  // reset answers when relaunching the game or reloading the page
  useEffect(() => {
    dispatch(answersClear());
  }, []);

  return (
    <>
      <h1>
        Welcome to the <br />
        TRIVIA CHALLENGE
      </h1>
      <h2>
        You will be presented with <br />
        10 True or False Questions
      </h2>
      <h3>Can you score 100%?</h3>
      <button>
        <Link to={`/game`}>BEGIN</Link>
      </button>
    </>
  );
};

export default Home;
