import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {selectedProduct} from "../actions/ProductActions";

const DevicePage = () => {
    let product  = useTypedSelector((state) => state.product)
    const {id} = useParams();
    const dispatch = useDispatch()
    const selectedProductItem = product.product;


    const { image, title, price, category, description } = selectedProductItem || {};

    const fetchDeviceDetail = async (id: number) => {
        try {
            const response = await axios
                .get(`https://fakestoreapi.com/products/${id}`)
            dispatch(selectedProduct(response.data));

        } catch (e) {
            console.log("Error", e)
        }
    }
    useEffect(() => {
        if (id) {
            const parsedId = parseInt(id); // Парсим строку в число
            fetchDeviceDetail(parsedId);
        }

    }, [id])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DevicePage;
