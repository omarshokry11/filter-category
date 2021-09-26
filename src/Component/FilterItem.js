import React, {useEffect, useState} from "react";
import API from "../Api/Api";
import {Slider} from "@material-ui/core";

import "./Style/FilterItem.scss";

function valuetext(value) {
    return `${value}`;
}

export default function FilterItems() {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    // Filter Use Search
    const [name, setName] = useState('');
    const [foundUsers, setFoundUsers] = useState(product);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = product.filter((user) => {
                return user.color.toLowerCase().startsWith(keyword.toLowerCase());
            });
            setFoundUsers(results);
        } else {
            setFoundUsers(product);
        }

        setName(keyword);
    };

    const rating = [
        {id: 1, className: "five-stars", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "fas fa-star"},
                    {id: 4, icon: "fas fa-star"},
                    {id: 5, icon: "fas fa-star"}
                ]
        },
        {id: 2, className: "four-stars", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "fas fa-star"},
                    {id: 4, icon: "fas fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        },
        {id: 3, className: "five-stars", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "fas fa-star"},
                    {id: 4, icon: "far fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        },
        {id: 4, className: "four-stars", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "fas fa-star"},
                    {id: 3, icon: "far fa-star"},
                    {id: 4, icon: "far fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        },
        {id: 5, className: "four-stars", stars:
                [
                    {id: 1, icon: "fas fa-star"},
                    {id: 2, icon: "far fa-star"},
                    {id: 3, icon: "far fa-star"},
                    {id: 4, icon: "far fa-star"},
                    {id: 5, icon: "far fa-star"}
                ]
        }
    ]

    return(
        <div className="filter-item">
            <div className="title-filter">
                <span>Filters</span>
            </div>
            <div className="price item">
                <h6>Price</h6>
                <input type="number" placeholder="From($)" />
                <input type="number" placeholder="To($)" />
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </div>
            <div className="color item">
                <h6>Color</h6>
                <input type="text" placeholder="Enter Color" className="color-search" value={name} onChange={filter} />
                {foundUsers && foundUsers.length > 0 ? (
                    foundUsers.map((color) => (
                        <div key={color.id}>
                            <input className="check-box" type="checkbox" />
                            <label>{color.color}</label>
                        </div>
                    ))
                ) : (
                    <>
                        {product.map((item) => <div key={item.id}>
                            <input className="check-box" type="checkbox" />
                            <label>{item.color}</label>
                        </div>)}
                    </>
                )}
            </div>
            <div className="rating item">
                <h6>Rating</h6>
                {rating.map((rat) => <div className={rat.className} key={rat.id}>
                    {rat.stars.map((star) => <i className={star.icon} key={star.id}> </i>)}
                </div>)}
            </div>
        </div>
    )
}