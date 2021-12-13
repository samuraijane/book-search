import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Overlay from '../overlay/overlay';
import { setModalMessage } from '../../redux/actions/actions';
import './style.css';

function Modal({ modalMessage, setModalMessage }) {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (modalMessage) {
      setIsOpen(true);
    } else {
      setIsOpen(false)
    }
  }, [modalMessage]);

  const closeModal = () => {
    setModalMessage('');
  }

  return (
    <>
      <div className="modal" onClick={closeModal}>
        {modalMessage}
      </div>
      {isOpen && <Overlay />}
    </>
  );
}

const mapStateToProps = state => ({
  modalMessage: state.modal.message
})

const mapDispatchToProps = {
  setModalMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
