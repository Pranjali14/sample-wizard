import React from "react";
import ShippingLabelMaker from "./shipping-label-maker";
import AppHeader from "./app-header";

const Home = props => {
  return (
    <React.Fragment>
      <AppHeader />
      <ShippingLabelMaker />
    </React.Fragment>
  );
};

export default Home;
