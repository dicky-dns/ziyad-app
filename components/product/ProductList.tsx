import ProductCard from "./ProductCard";
import { Product } from "@/types/types";
import ProductLoading from "./ProductLoading";

type Props = {
  products: Product[];
  loading: boolean;
};

export default function ProductList({ products, loading }: Props) {
  return (
    <div className="grid gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">

      { loading
        ? Array.from({ length: 12 }).map((_, index) => (
          <ProductLoading key={index} />
        ))
          : products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
    </div>
  );
}