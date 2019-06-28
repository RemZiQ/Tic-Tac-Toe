import React, { useState } from 'react';
import { updateMatrix, checkWinner } from '../../Helpers/helper';

const Cell = ({ id, setGameOVer, setWinner }) => {
  const [selectFlag, setFlag] = useState(false);
  const { count: currentCount } = window.sessionStorage;

  const updateClassName = (flag) => {
    if (flag) return (+currentCount % 2) ? 'red' : 'yellow';
    return 'cell';
  };

  const handler = (e) => {
    const { id: ID } = e.target;
    const { count } = window.sessionStorage;
    const order = +count % 2;
    if (!selectFlag) {
      window.sessionStorage.count = +window.sessionStorage.count + 1;
      updateMatrix(ID, order);
      if (count >= 4) {
        const winner = checkWinner();
        if (winner) {
          setWinner(winner);
          setGameOVer(true);
        }
      }
    }
    setFlag(true);
  };
  return (
    <button
      className={updateClassName(selectFlag)}
      id={id}
      type="button"
      onClick={handler}
    />
  );
};

export default Cell;
