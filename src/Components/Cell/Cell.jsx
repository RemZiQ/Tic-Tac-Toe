import React, { useState } from 'react';
import { updateMatrix, checkWinner } from '../../Helpers/helper';

const Cell = ({ id, setGameOVer, setWinner }) => {
  const [selectFlag, setFlag] = useState(false);
  const [cross, setCrossFlag] = useState(null);

  // TODO!!!: user can change cross on circle if multi click Cell!
  const placeCrossOrCircle = () => {
    if (cross) {
      return (
        <i className="fas fa-times" />
      );
    }
    return <i className="far fa-circle" />;
  };

  const handler = (e) => {
    const { id: ID } = e.target;
    const { count } = window.sessionStorage;
    const order = +count % 2;
    if (!selectFlag) {
      setCrossFlag(!order);
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
      className="cell"
      id={id}
      type="button"
      onClick={handler}
    >
      {cross === null ? null : placeCrossOrCircle()}
    </button>
  );
};

export default Cell;
