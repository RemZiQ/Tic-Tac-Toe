import React from 'react';

import { reloadPage } from '../../Helpers/helper';

const PopUp = ({ closeModal }) => {
  return (
    <div className="pop-up">
      <h2>The game ended draw</h2>
      <div className="layout-container__pop-up__buttons">

        <button
          className="button__play-again"
          type="button"
          onClick={reloadPage}
        >
          Play again?
        </button>

        <button
          className="button__back"
          type="button"
          onClick={() => closeModal(false)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default PopUp;
