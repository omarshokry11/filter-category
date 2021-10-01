import React, {useState} from "react";
import {Slider} from "@material-ui/core";
// import API from "../../Api/Api";

import "./Style/FilterPrice.scss";

function valuetext(value) {
    return `${value}`;
}

export default function FilterPrice() {

    const [value, setValue] = useState([10, 80]);
    // const [product, setProduct] = useState([]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // useEffect(() => {
    //     if(product.length === 0){
    //         API("products")
    //             .then(({ data, status }) => {
    //                 if (status === 200) {
    //                     setProduct(data);
    //                 } else {
    //                     console.log(data);
    //                 }
    //             })
    //     }
    // }, [product]);

    return(
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
    )
}