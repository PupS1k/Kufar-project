import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from '../IconButton';
import close from '../../images/plusReset.png';
import ContextProvider from '../Context';
import './style.css';

const ModalWindow = ({toggleIsOpenModal, children}) => (
  <div>
    {ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__items">
          <div className="modal__close">
            <IconButton
              className="modal__close-button"
              onClick={toggleIsOpenModal}
              image={{
                alt: 'Close',
                icon: close,
                iconSize: 'medium'
              }}
            />
          </div>
          <ContextProvider value={toggleIsOpenModal}>
            {children}
          </ContextProvider>
        </div>
      </div>,
      document.getElementById('portal')
    )}
  </div>
);

export default ModalWindow;
