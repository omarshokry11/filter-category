import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import API from "../Api/Api";

import "./Style/ProductItem.scss";


export default function ProductItem() {

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

    return(
        <div className="product-item">
            {product.map((item) => <div className="item" key={item.id}>
                <Image src={item.image} />
                <h5>{item.name}</h5>
                <div className="rating">
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                    <i className="fas fa-star"> </i>
                </div>
                <span className="price">{item.price} <span className="currency">{item.currency}</span></span>
            </div>)}
        </div>
    )
}