import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchGallery = async (searchQuery, page) => {
  try {
    const params = new URLSearchParams({
      key: '29479728-a98d2355de22f92bb93dea3e0',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safeSearch: true,
      per_page: 12,
      page,
    });

    const response = await axios.get(`?${params}`);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
