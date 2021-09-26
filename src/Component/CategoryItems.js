import React, {useEffect, useState} from "react";
import API from "../Api/Api";

import "./Style/CategoryItems.scss";

export default function CategoryItems() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        API("products")
            .then(({ data, status }) => {
                if (status === 200) {
                    setProduct(data);
                } else {
                    console.log(data);
                }
            })
    }, []);

    // Filter Use Button
    const filterItem = (categItem) => {
        const updateItems = product.filter((curElem) => {
            console.log(curElem.categoryId, categItem);
            return curElem.categoryId === parseInt(categItem);
        });
        setProduct(updateItems);
    }

    return(
        <div className="category">
            <button className="btn-category" onClick={() => setProduct(product)}>All Category</button>
            <button className="btn-category" onClick={() => filterItem('1')}>Category-1</button>
            <button className="btn-category" onClick={() => filterItem('2')}>Category-2</button>
            <button className="btn-category" onClick={() => filterItem('3')}>Category-3</button>
            <button className="btn-category" onClick={() => filterItem('4')}>Category-4</button>
            <button className="btn-category" onClick={() => filterItem('5')}>Category-5</button>
        </div>
    )
}