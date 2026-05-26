import { useCallback, useState } from 'react';
import GetProductsButton from './GetProductsButton';

type Product = {
  id: number;
  title: string;
};

const ProductList = () => {

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {

    const response = await fetch(
      'https://dummyjson.com/products'
    );

    const data = await response.json();

    setProducts(data.products);

  }, []);

  return (
    <div>

      <h2>Products</h2>

      <GetProductsButton
        fetchProducts={fetchProducts}
      />

      {
        products.map(product => (
          <p key={product.id}>
            {product.title}
          </p>
        ))
      }

    </div>
  );
};

export default ProductList;