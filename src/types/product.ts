import type { ImageSourcePropType } from 'react-native';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: ImageSourcePropType;
  description: string;
};
