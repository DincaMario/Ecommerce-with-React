import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-out/sign-in-and-sign-out";
import {
  createUserProfileDocument,
  onAuthStateChangedListener,
} from "./firebase/firebase.utils";
import React from "react";
import { useEffect } from "react";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout";
import { useDispatch } from "react-redux";
import SHOP_DATA from "./redux/shop/shop.data";
import { addCollectionAndDocuments } from "./firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const collectionsArray = Object.values(SHOP_DATA); // Convert object to array
  //   addCollectionAndDocuments("collections", collectionsArray);
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserProfileDocument(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route exact path="signin" element={<SignInAndSignUp />} />
        <Route exact path="checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default App;
