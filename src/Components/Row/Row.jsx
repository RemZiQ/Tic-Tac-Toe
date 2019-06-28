import React from 'react';

import Cell from '../Cell';

const Row = ({
  countOfMoves, setCount, setGameOVer, setWinner, counter,
}) => (
  <div className="flex-container__row">
    <Cell
      count={countOfMoves}
      setCount={setCount}
      id={counter()}
      setGameOVer={setGameOVer}
      setWinner={setWinner}
    />
    <Cell
      count={countOfMoves}
      setCount={setCount}
      id={counter()}
      setGameOVer={setGameOVer}
      setWinner={setWinner}
    />
    <Cell
      count={countOfMoves}
      setCount={setCount}
      id={counter()}
      setGameOVer={setGameOVer}
      setWinner={setWinner}
    />
  </div>
);

export default Row;
