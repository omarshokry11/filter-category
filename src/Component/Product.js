import React from "react";
import CategoryItems from "./CategoryItems";
import FilterItems from "./FilterItem";
import ProductItem from "./ProductItem";

import "./Style/Product.scss";

export default function Product() {
    return(
        <div className="main-product-container">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-12 title">
                        <h2>Our e-Commerce Store</h2>
                        <p>Choose one of our categories from below</p>
                    </div>
                    <div className="col-12">
                        <CategoryItems />
                    </div>
                    <div className="col-lg-3 col-12">
                        <FilterItems />
                    </div>
                    <div className="col-lg-9 col-12">
                        <ProductItem />
                    </div>
                </div>
            </div>
        </div>
    )
}