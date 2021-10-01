import React from "react";
import FilterColor from "./Block/FilterColor";
import FilterRating from "./Block/FilterRating";
import FilterPrice from "./Block/FilterPrice";

import "./Style/FilterItem.scss";

export default function FilterItems() {
    return(
        <div className="filter-item">
            <div className="title-filter">
                <span>Filters</span>
            </div>
            <FilterPrice />
            <FilterColor />
            <FilterRating />
        </div>
    )
}