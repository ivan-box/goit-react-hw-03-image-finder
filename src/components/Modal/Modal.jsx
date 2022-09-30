import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('modalRoot');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.target === e.currentTarget || e.code === 'Escape')
      this.props.toggleModal();
  };
  render() {
    return createPortal(
      <div className="overlay" onClick={this.handleKeyDown}>
        <div className="modalRoot">
          <img src={this.props.src} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
