import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import FilterCategory from "./FilterCategory";


const ProductList = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, getAllProducts] = useFetch(url);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <section>
      <FilterCategory setProducts={getAllProducts} />
      <div className="products-container">
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))} 
      </div>
    </section>
  );
};


export default ProductList;
