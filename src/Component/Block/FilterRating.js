import React, {useEffect, useState} from "react";
import API from "../../Api/Api";

import "./Style/FilterRating.scss";

export default function FilterRating() {

    const [product, setProduct] = useState([]);
    const ratingItem = [
        {id: 1, className: "five-stars", number: "5", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "fas fa-star"},
                    {id: 4, icon: "fas fa-star"},
                    {id: 5, icon: "fas fa-star"}
                ]
        },
        {id: 2, className: "four-stars", number: "4", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "fas fa-star"},
                    {id: 4, icon: "fas fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        },
        {id: 3, className: "five-stars", number: "3", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "fas fa-star"},
                    {id: 4, icon: "far fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        },
        {id: 4, className: "four-stars", number: "2", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "far fa-star"},
                    {id: 4, icon: "far fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        },
        {id: 5, className: "four-stars", number: "1", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "far fa-star"},
                    {id: 3, icon: "far fa-star"},
                    {id: 4, icon: "far fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        }
    ]
    const filterRating = (ratingItem) => {
        const updateItems = product.filter((ratingElem) => {
            return ratingElem.rating === parseInt(ratingItem);
        });
        console.log(updateItems);
        setProduct(updateItems);
    }

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
        <div className="item rating">
            <h6>Rating</h6>
            {ratingItem.map((rat) => <div className={rat.className} key={rat.id}>
                {rat.stars.map((item) => <i className={item.icon} key={item.id} onClick={() => filterRating(item.number)}> </i>)}
            </div>)}
        </div>
    )
}