import axios from 'axios';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* axios.defoults.baseURL='https://pixabay.com/api/?key=29479728-a98d2355de22f92bb93dea3e0&q=yellow+flowers&image_type=photo&pretty=true' */}
      {/* https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12 */}
      {/* id - унікальний ідентифікатор
      webformatURL - посилання на маленьке
      зображення для списку карток
      largeImageURL - посилання на велике
      зображення для модального вікна React homework template */}
      <Searchbar />
      <ImageGalleryItem />
      <ImageGallery />
      <Modal />
    </div>
  );
};
