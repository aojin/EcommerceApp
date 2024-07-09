import { createNavigationContainerRef } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  ProductList: undefined;
  ProductDetail: { id: string };
  Cart: undefined;
  Checkout: undefined;
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

type NavigationArgs =
  | ['Home']
  | ['ProductList']
  | ['ProductDetail', { id: string }]
  | ['Cart']
  | ['Checkout'];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: NavigationArgs
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}
