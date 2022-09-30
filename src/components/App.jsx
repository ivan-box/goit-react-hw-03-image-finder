// import axios from 'axios';
import { Component } from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { fetchGallery } from '../services/Api/Api';
import Searchbar from '../components/Searchbar/Searchbar';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Loader from '../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    error: null,
    foundImages: null,
    currentLargeImg: null,
  };
  setInitialParams = searchQuery => {
    if (searchQuery === '') {
      return alert('Enter the search value!');
    }

    if (searchQuery === this.state.searchQuery) {
      return;
    }

    this.setState({
      images: [],
      searchQuery,
      page: 1,
    });
  };
  pageUpdate = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  addImages = async (searchQuery, page) => {
    this.setState({ loading: true });

    try {
      const data = await fetchGallery(searchQuery, page);
      const { hits: newImages, totalHits: foundImages } = data;

      this.setState(oldState => ({
        images: [...oldState.images, ...newImages],
      }));

      if (foundImages !== this.state.foundImages) {
        this.setState({ foundImages });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  };
  openModal = (src, alt) => {
    this.setState(state => ({ ...state, currentLargeImg: { src, alt } }));
  };

  closeModal = e => {
    this.setState({ currentLargeImg: null });
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ loading: true });
      this.addImages(searchQuery, page);
    }
  }

  render() {
    const { images, loading, error, foundImages, currentLargeImg } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.setInitialParams} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {images.length > 0 && (
          <>
            <ImageGallery items={images} openModal={this.openModal} />
            {images.length < foundImages && (
              <Button pageUpdate={this.pageUpdate} />
            )}
          </>
        )}
        {currentLargeImg && (
          <Modal closeModal={this.closeModal} imgData={currentLargeImg} />
        )}
        {loading && <Loader />}

        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
export default App;
