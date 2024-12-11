import { Sort } from "./filterSlice";

export type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};
export interface PizzaSliceState {
  items: Pizza[];
  status: string;
}
export type SearchPizzaParams = {
  sortBy: Sort;
  order: string;
  category: string;
  search: string;
  currentPage: string;
  // rating: number;
};
