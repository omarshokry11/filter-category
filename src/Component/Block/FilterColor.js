import React, {useEffect, useState} from "react";
import API from "../../Api/Api";

import "./Style/FilterColor.scss";

export default function FilterColor() {

    const [product, setProduct] = useState([]);
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
    const filterColor = (colorItem) => {
        const updateItems = product.filter((colorElem) => {
            return colorElem.color === colorItem;
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
                        <input className="check-box" type="checkbox" onClick={() => filterColor(item.color)} />
                        <label>{item.color}</label>
                    </div>)}
                </>
            )}
        </div>
    )
}