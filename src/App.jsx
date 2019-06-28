import React, { useState, useEffect, Fragment } from 'react';

import Row from './Components/Row';
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
  const yellow = 'Yellow win!!!!!Gratz';
  const red = 'Red win!!!!!Gratz';
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
        <div className="layout-container">
          <button type="button" onClick={handlerForAbordGame}>End game</button>
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
      )}
    </Fragment>
  );
};

export default App;
