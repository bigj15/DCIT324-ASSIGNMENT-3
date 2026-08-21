import type { Product } from '@/src/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nike - Sport Runner',
    category: 'Shoes',
    price: 59.99,
    rating: 4.8,
    image: require('@/src/assets/nike-shoes.png'),
    description:
      'A lightweight everyday sneaker with a cushioned sole, breathable upper, and sporty profile for casual wear.',
  },
  {
    id: '2',
    name: 'AirPods - Wireless Audio',
    category: 'Audio',
    price: 47.99,
    rating: 4.7,
    image: require('@/src/assets/airpods.png'),
    description:
      'Compact wireless earbuds with a clean case, easy pairing, and clear sound for calls, music, and study time.',
  },
  {
    id: '3',
    name: 'Classic Black Shirt',
    category: 'Fashion',
    price: 19.99,
    rating: 4.6,
    image: require('@/src/assets/black-shirt.png'),
    description:
      'A simple black shirt with a clean fit that pairs easily with jeans, skirts, or layered outfits.',
  },
  {
    id: '4',
    name: 'Rose Bloom Perfume',
    category: 'Beauty',
    price: 29.99,
    rating: 4.9,
    image: require('@/src/assets/perfume.png'),
    description:
      'A soft floral fragrance in a minimal bottle, made for an easy everyday finishing touch.',
  },
  {
    id: '5',
    name: 'Red Evening Dress',
    category: 'Fashion',
    price: 54.99,
    rating: 4.5,
    image: require('@/src/assets/red-dress.png'),
    description:
      'A bright red dress with a polished silhouette for dinners, events, and dressed-up weekends.',
  },
  {
    id: '6',
    name: 'Smart Speaker',
    category: 'Audio',
    price: 39.99,
    rating: 4.4,
    image: require('@/src/assets/speaker.png'),
    description:
      'A compact speaker with clear sound and a simple shape that fits neatly on a desk or shelf.',
  },
  {
    id: '7',
    name: 'Daily Skin Set',
    category: 'Beauty',
    price: 34.99,
    rating: 4.6,
    image: require('@/src/assets/curology.png'),
    description:
      'A clean skincare set for everyday routines, with simple packaging and a gentle daily-use feel.',
  },
  {
    id: '8',
    name: 'Minimal Wrist Watch',
    category: 'Accessories',
    price: 79.99,
    rating: 4.9,
    image: require('@/src/assets/watch.png'),
    description:
      'A slim wrist watch with a tidy face and versatile strap for school, work, and casual outfits.',
  },
];
