// import axios from 'axios';
import { Component } from 'react';
export class App extends Component {
  render() {
    return (
      <div>
      
      </div>)
  }
}



/* 

import axios from 'axios';
import Notiflix from 'notiflix';

export async function getImage(inputValue, currentPage = 1, perPage = 40) {
  let options = {
    params: {
      key: '29479728-a98d2355de22f92bb93dea3e0',
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: currentPage,
      per_page: perPage,
    },
  };
  const response = await axios.get('https://pixabay.com/api/', options);

  if (response.data.hits.length === 0) {
    return Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  return response.data;
}
// {/* axios.defoults.baseURL='https://pixabay.com/api/?key=29479728-a98d2355de22f92bb93dea3e0&q=yellow+flowers&image_type=photo&pretty=true' */}
      // {/* https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12 */}
      // {/* id - унікальний ідентифікатор
      // webformatURL - посилання на маленьке
      // зображення для списку карток
      // largeImageURL - посилання на велике
      // зображення для модального вікна React homework template */}
      // {/* <Searchbar />
      // <ImageGalleryItem />
      // <ImageGallery />
      // <Modal /> */}
