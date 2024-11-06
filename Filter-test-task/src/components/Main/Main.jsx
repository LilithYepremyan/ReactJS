import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "./Main.slice";
import FilterSelect from "../FilterSelect/FilterSelect";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { ClipLoader } from "react-spinners";

const categoryOptions = [
  { label: "All", value: "All" },
  { label: "Clothing", value: "Clothing" },
  { label: "Electronics", value: "Electronics" },
  { label: "Footwear", value: "Footwear" },
];

const brandOptions = [
  { label: "All", value: "All" },
  { label: "Nike", value: "Nike" },
  { label: "Apple", value: "Apple" },
  { label: "Balmain", value: "Balmain" },
  { label: "Samsung", value: "Samsung" },
  { label: "Adidas", value: "Adidas" },
];

const ratingOptions = [
  { label: "All", value: "All" },
  { label: "1 Star & Up", value: 1 },
  { label: "2 Stars & Up", value: 2 },
  { label: "3 Stars & Up", value: 3 },
  { label: "4 Stars & Up", value: 4 },
  { label: "5 Stars", value: 5 },
];

const Main = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.products);

  const [filters, setFilters] = useState({
    category: localStorage.getItem("categoryFilter") || "All",
    brand: localStorage.getItem("brandFilter") || "All",
    rating: localStorage.getItem("ratingFilter") || "All",
    priceRange: JSON.parse(localStorage.getItem("priceRange")) || [0, 200],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebouncedValue(searchQuery, 500);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    Object.entries(filters).forEach(([key, value]) => {
      localStorage.setItem(`${key}Filter`, value);
    });
    localStorage.setItem("priceRange", JSON.stringify(filters.priceRange));
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };
  const LoadingSpinner = () => (
    <div className={styles.spinner}>
      <ClipLoader size={50} color="#4A90E2" />
    </div>
  );

  const filterProducts = (products, filters, searchQuery) => {
    return products.filter((product) => {
      const matchesCategory =
        filters.category === "All" || product.category === filters.category;
      const matchesBrand =
        filters.brand === "All" || product.brand === filters.brand;
      const matchesPrice =
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1];
      const matchesRating =
        filters.rating === "All" || product.rating >= filters.rating;
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());

      return (
        matchesCategory &&
        matchesBrand &&
        matchesPrice &&
        matchesRating &&
        matchesSearch
      );
    });
  };

  const filteredProducts = filterProducts(
    products,
    filters,
    debouncedSearchQuery
  );

  return (
    <div className={styles.wrapper}>
      <aside className={styles.sidebar}>
        <h2>Filter Products</h2>
        <FilterSelect
          label="Category"
          options={categoryOptions}
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
        />
        <FilterSelect
          label="Brand"
          options={brandOptions}
          value={filters.brand}
          onChange={(e) => handleFilterChange("brand", e.target.value)}
        />
        <FilterSelect
          label="Rating"
          options={ratingOptions}
          value={filters.rating}
          onChange={(e) => handleFilterChange("rating", Number(e.target.value))}
        />
        <div className={styles.searchGroup}>
          <label>Search</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterGroup}>
          <label>
            Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </label>
          <input
            type="range"
            min="0"
            max="200"
            step="1"
            value={filters.priceRange[0]}
            onChange={(e) =>
              handleFilterChange("priceRange", [
                +e.target.value,
                filters.priceRange[1],
              ])
            }
          />
          <input
            type="range"
            min="0"
            max="200"
            step="1"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange("priceRange", [
                filters.priceRange[0],
                +e.target.value,
              ])
            }
          />
        </div>
      </aside>
      <div className={styles.container}>
        {loading && <LoadingSpinner />}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className={styles.noProducts}>
            No products found with the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default Main;
