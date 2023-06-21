import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Board, TurnContext } from "../src/components/Board";
import { Home } from "../src/components/Home";

export const userChoiceContext = React.createContext();

function App() {
  const [userChoice, setUserChoice] = useState(false);

  return (
    <userChoiceContext.Provider value={{userChoice, setUserChoice}}>
      <BrowserRouter>
        <div className="box !w-full h-[100vh] ">
          <div className='board-container'>
            <Routes>
              <Route path="/react-tic" element={<Home />} />
              <Route path="/board" element={<Board />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </userChoiceContext.Provider>
  );
}

export default App;


