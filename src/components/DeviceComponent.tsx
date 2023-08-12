import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from "react-router-dom";

const DeviceComponent = () => {
    const products = useTypedSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product
        return (
            <div className="four column wide" key={id}>
                <Link to={`/device/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title}/>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">${price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })
    return (
        <>{renderList}</>
    )

};
export default DeviceComponent;
