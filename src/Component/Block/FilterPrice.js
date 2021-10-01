import React, {useEffect, useState} from "react";
import Slider from '@material-ui/core/Slider';
import API from "../../Api/Api";

import "./Style/FilterPrice.scss";

export default function FilterPrice() {

    const [value, setValue] =  useState([10,5]);
    const [product, setProduct] = useState([]);
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };

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
        <div className="price item">
            <h6>Price</h6>
            <p><strong>From: </strong>${value[0]}</p>
            <p className="item-p-2"><strong>To: </strong>${value[1]}</p>
            <Slider
                value={value}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
            />
        </div>
    )
}