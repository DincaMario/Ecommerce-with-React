import React from "react";
import { Outlet } from "react-router";
import Directory from "../components/menu-item/directory/directory";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <Directory />
    <Outlet></Outlet>
  </div>
);

export default HomePage;
