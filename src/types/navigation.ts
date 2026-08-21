import type { NavigatorScreenParams } from '@react-navigation/native';

import type { Product } from './product';

export type TabParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  ShopTabs: NavigatorScreenParams<TabParamList> | undefined;
  ProductDetails: { product: Product };
};
