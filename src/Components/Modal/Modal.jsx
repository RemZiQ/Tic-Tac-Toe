import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  const modalContainer = document.getElementById('modal');
  const element = document.createElement('div');
  element.classList.add('modal_bg');

  useEffect(() => {
    modalContainer.appendChild(element);
    return () => modalContainer.removeChild(element);
  });

  return (
    ReactDOM.createPortal(
      children,
      element,
    )
  );
};


export default Modal;
