import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import { selectCollections } from "../../redux/shop/shop.selector";
import PreviewCollection from "../../components/menu-item/preview-collection/preview-collection";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../category/collection";
import { setCategories } from "../../redux/categories/categories.action";
import { getCategoriesAndDocuments } from "../../firebase/firebase.utils";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments("categories");
      console.log(categories);
      dispatch(setCategories(categories));
    };
    getCategoriesMap();
  }, []);

  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<CollectionOverview />}></Route>
        <Route path="/:category" element={<CollectionPage />}></Route>
      </Routes>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

export default ShopPage;
