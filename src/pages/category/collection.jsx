import React from "react";
import { useParams } from "react-router";
import "./collection.styles.scss";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item";
import { selectCategoriesMap } from "../../redux/categories/categories.selector";

const CollectionPage = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  console.log(categoriesMap);
  console.log(category);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container ">
      {products &&
        products.map((product) => (
          <CollectionItem key={product.id} item={product} />
        ))}
    </div>
  );
};

export default CollectionPage;
