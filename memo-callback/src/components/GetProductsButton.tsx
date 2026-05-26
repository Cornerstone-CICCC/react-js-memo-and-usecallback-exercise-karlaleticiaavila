import { memo } from 'react';

type Props = {
  fetchProducts: () => void;
};

const GetProductsButton = ({ fetchProducts }: Props) => {

  console.log("Rendered Button Component");

  return (
    <button onClick={fetchProducts}>
      Fetch Products
    </button>
  );
};

export default memo(GetProductsButton);