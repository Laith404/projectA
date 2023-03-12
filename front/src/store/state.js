import imgJeans from '../assets/image/imageJeans.jpg';
import woman from '../assets/image/woman.jpg';

export default {
  minPrice: 0,
  maxPrice: 10000,
  product: [
    {
      id: 1,
      price: 2500,
      rating: 4,
      title: 'Джинсы мужские',
      gender: 'man',
      description: 'Крутое описание товара, дада я крутой',
      imgProduct: imgJeans,
      type: 'jeans',
    },
    {
      id: 2,
      price: 1800,
      rating: 4.7,
      title: 'футболка мужская',
      gender: 'man',
      description: 'Крутое описание товара, дада я крутой',
      imgProduct: imgJeans,
      type: 'tShirt',
    },
    {
      id: 3,
      price: 2500,
      rating: 5,
      title: 'Джинсы женские',
      gender: 'man',
      description: 'Крутое описание товара, дада я крутой',
      imgProduct: woman,
      type: 'jeans',
    },
  ],
};
