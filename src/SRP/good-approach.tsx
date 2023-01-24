import { Product } from "../components/product";
import { Filter, filterProducts } from "../components/filter";
import useProducts from "../hooks/useProducts";
import useRateFilter from "../hooks/useRateFilter";

const Good = () => {
  const { products } = useProducts();

  const { filterRate, handleRating } = useRateFilter();

  return (
    <>
      <p className="text-4xl text-center text-teal-600 mb-4">GOOD APPROACH!</p>
      <div className="flex flex-col h-full">
        <Filter filterRate={filterRate as number} handleRating={handleRating} />
        <div className="h-full flex flex-wrap justify-center">
          {filterProducts(products, filterRate).map((product: any) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Good;
