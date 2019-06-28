import React, { useState, useEffect, Fragment } from 'react';

import Row from './Components/Row';
import Footer from './Components/Footer'
import { createMatrix, idMaker } from './Helpers/helper';

import './css/app.css';

const App = () => {
  const [countOfMoves, setCount] = useState(0);
  const [gameOver, setGameOVer] = useState(false);
  const [winner, setWinner] = useState(undefined);
  const handlerReloadPage = () => window.location.reload();
  const handlerForAbordGame = () => {
    setWinner(1);
    setGameOVer(true);
  };
  let counter = idMaker();
  const yellow = 'Circle win!!!!!Gratz';
  const red = 'Cross win!!!!!Gratz';
  useEffect(() => {
    counter = idMaker();
    window.sessionStorage.clear();
    window.sessionStorage.setItem('count', '0');
    createMatrix();
  }, []);
  return (
    <Fragment>
      {gameOver && (
        <div className="layout-container">
          <p className="winner">{winner === 1 ? yellow : red }</p>
          <button
            className="play-again"
            type="button"
            onClick={handlerReloadPage}
          >
            Play again
          </button>
        </div>
      )}
      {!gameOver && (
        <Fragment>
          <header className="header">
            <h1 className="logo">Tic-tac-toe</h1>
            <button className="end-game" type="button" onClick={handlerForAbordGame}>End game</button>
          </header>
          <div className="layout-container__play-zone">
            <Row
              counter={counter}
              count={countOfMoves}
              setCount={setCount}
              setGameOVer={setGameOVer}
              setWinner={setWinner}
            />
            <Row
              counter={counter}
              count={countOfMoves}
              setCount={setCount}
              setGameOVer={setGameOVer}
              setWinner={setWinner}
            />
            <Row
              counter={counter}
              count={countOfMoves}
              setCount={setCount}
              setGameOVer={setGameOVer}
              setWinner={setWinner}
            />
          </div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
};

export default App;
