export interface Product {
  title: string;
  images: string[];
  imageCover: string;
  price: number;
  category: Category;
  brand: Brand;
  ratingsQuantity: number;
  quantity: number;
  description: string;
  ratingsAverage: number;
  sold: number;
  id: string;
  subcategory:Subcategory
}

interface Category {
  _id: string;
  name: string;
  image: string;
  slug: string;
}
interface Brand {
  _id: string;
  name: string;
  image: string;
  slug: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category:string;
}
