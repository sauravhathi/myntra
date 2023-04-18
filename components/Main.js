import React, { useState } from 'react';
import Filter from "./Filter";
import Productcontainer from "./Product/Product.container";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__left">
          <Filter />
        </div>
        <div className="main__right">
          <Productcontainer />
        </div>
      </div>
    </div>
  );
}

export default Main;