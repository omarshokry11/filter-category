import React, {useEffect, useState} from "react";
import API from "../Api/Api";

import "./Style/CategoryItems.scss";

export default function CategoryItems() {

    const [product, setProduct] = useState([]);
    const filterItem = (categItem) => {
        const updateItems = product.filter((curElem) => {
            return curElem.categoryId === parseInt(categItem);
        });
        console.log(updateItems);
        setProduct(updateItems);
    }
    const categoryItem = [
        {id: 1, name: "Category-1", number: "1"},
        {id: 2, name: "Category-2", number: "2"},
        {id: 3, name: "Category-3", number: "3"},
        {id: 4, name: "Category-4", number: "4"},
        {id: 5, name: "Category-5", number: "5"}
    ]

    useEffect(() => {
        if(product.length === 0){
            API("products")
                .then(({ data, status }) => {
                    if (status === 200) {
                        setProduct(data);
                    } else {
                        console.log(data);
                    }
                })
        }
    }, [product]);

    return(
        <div className="category">
            {categoryItem.map((item) => <button className="btn-category" onClick={() => filterItem(item.number)} key={item.id}>{item.name}</button>)}
        </div>
    )
}