import { createContext } from 'react';

export const CartContext = createContext({totalPrice: 0, products: [], productsCount: 0});