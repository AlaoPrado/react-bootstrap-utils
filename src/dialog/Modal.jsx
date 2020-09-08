import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { stopPropagation } from '../utils/event-handlers';

const ESCAPE_KEYCODE = 27;

export function Modal({ title, body, onClose, isOpen, footer, staticBackdrop, scrollable, centered, size, keyboard }) {
  const modalRef = useRef(null);
  const closeAndHide = useCallback(() => {
    hideModal(modalRef);
    onClose();
  }, [onClose]);
  const closeIfEscape = useCallback(
    (event) => {
      if (keyboard && event.which === ESCAPE_KEYCODE) {
        closeAndHide();
      }
    },
    [keyboard, closeAndHide]
  );

  useEffect(() => {
    const modalElement = modalRef.current;

    modalElement.addEventListener('keydown', closeIfEscape);

    return () => {
      modalElement.removeEventListener('keydown', closeIfEscape);
    };
  }, [keyboard, closeIfEscape, modalRef]);

  useEffect(() => {
    if (isOpen) {
      showModal(modalRef);
    } else {
      hideModal(modalRef);
    }
  }, [isOpen]);

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      ref={modalRef}
      onClick={(e) => {
        e.stopPropagation();
        if (!staticBackdrop) {
          closeAndHide();
        }
      }}
    >
      <div
        className={`modal-dialog ${scrollable ? 'modal-dialog-scrollable' : ''} ${
          centered ? 'modal-dialog-centered' : ''
        } ${size ? `modal-${size}` : ''}`}
        role="document"
        onClick={stopPropagation}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={closeAndHide} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{renderObjectOrFunction(body, { close: closeAndHide })}</div>
          {footer && <div className="modal-footer">{renderObjectOrFunction(footer, { close: closeAndHide })}</div>}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  centered: true,
  keyboard: true,
  scrollable: false,
  size: '',
  staticBackdrop: false,
};

Modal.propTypes = {
  body: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  centered: PropTypes.bool,
  footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  isOpen: PropTypes.bool,
  keyboard: PropTypes.bool,
  onClose: PropTypes.func,
  scrollable: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'lg', 'xl', '']),
  staticBackdrop: PropTypes.bool,
  title: PropTypes.node,
};

function hideModal(modalRef) {
  const body = document.querySelector('body');

  modalRef.current.style.display = 'none';
  modalRef.current.classList.remove('show');

  if (getModals().length === 0) {
    hideModalBackdrop();
    body.classList.remove('modal-open');
  }
}

function showModal(modalRef) {
  const body = document.querySelector('body');

  body.classList.add('modal-open');
  showModalBackdrop();

  modalRef.current.style.display = 'block';
  modalRef.current.classList.add('show');
  modalRef.current.focus();
}

function renderObjectOrFunction(content, params) {
  if (typeof content === 'function') {
    return content(params);
  }

  return content;
}

function showModalBackdrop() {
  const backdrop = getModalBackdrop();

  backdrop.classList.remove('d-none');
}

function hideModalBackdrop() {
  const backdrop = getModalBackdrop();

  backdrop.classList.add('d-none');
}

function getModalBackdrop() {
  const body = document.querySelector('body');
  let backdrop = document.querySelector('.modal-backdrop');

  if (!backdrop) {
    backdrop = document.createElement('div');

    backdrop.classList.add('modal-backdrop');
    backdrop.classList.add('fade');
    backdrop.classList.add('show');
    backdrop.classList.add('d-none');
    body.appendChild(backdrop);
  }

  return backdrop;
}

function getModals() {
  return document.querySelectorAll('#modal-portals .modal.show');
}
