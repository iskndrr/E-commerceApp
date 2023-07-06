export interface Cart {
  numOfCartItems: number;
  data: Data;
}

interface Data {
  _id: string;
  products: Products[];
  totalCartPrice: number;
}

interface Products {
  count: number;
  price: number;
  _id: string;
  product: Product;
}

interface Product {
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  ratingsAverage: number;
  brand: Brand;
  category: Category;
}

interface Category {
  name: string;
  slug: string;
  image: string;
  _id: string;
}

interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
