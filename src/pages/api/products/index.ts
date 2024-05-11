import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://dummyjson.com/products');

      const filteredProduct = response.data.products.map((product: Product) => {
        const { id, title, description, price, discountPercentage } = product;
        const afterDiscountPrice = price - price * (discountPercentage / 100);
        return {
          id,
          title,
          description,
          price,
          discountPercentage,
          afterDiscountPrice,
        };
      });

      const { total, skip, limit } = response.data;
      const result = {
        products: filteredProduct,
        total,
        skip,
        limit,
      };
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

export default handler;
