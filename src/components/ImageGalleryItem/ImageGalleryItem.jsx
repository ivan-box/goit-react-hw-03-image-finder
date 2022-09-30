import { Component } from 'react';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () =>
    this.setState(({ showModal }) => ({ showModal: !showModal }));

  render() {
    const { showModal, webformatURL, tags } = this.state;
    return (
      <>
        <li className="gallery-item">
          <img
            className="gallery-image"
            src={webformatURL}
            alt={tags}
            onClick={this.toggleModal}
          />
        </li>
        {showModal && (
          <Modal
            toggleModal={this.toggleModal}
            src={this.props.largeImageURL}
            alt={this.props.tags}
          ></Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
