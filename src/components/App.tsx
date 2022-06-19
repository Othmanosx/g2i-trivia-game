import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Game } from './game';
import { Home } from './home';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
