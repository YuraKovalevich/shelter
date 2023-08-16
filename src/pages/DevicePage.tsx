import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {selectedProduct} from "../actions/ProductActions";
import styles from '../styles/DevicePage.module.scss'
import {ActionTypes} from "../utils/consts";

const DevicePage = () => {
    let product  = useTypedSelector((state) => state.product)
    const {id} = useParams();
    const dispatch = useDispatch()
    const selectedProductItem = product.product;
    const addToCart = () => {
        if (selectedProductItem) {
            dispatch({type: ActionTypes.ADD_TO_CART, payload: selectedProductItem});
        }
    };


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
        <div className={styles.container}>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className={styles.segment}>
                    <div className={styles.segment}>
                        <div className={styles.row}>
                            <div className={styles.colum}>
                                <img className={styles.image} src={image} />
                            </div>
                            <div className={styles.title}>
                                <div>
                                    <h1>{title}</h1>
                                </div>
                                <div>
                                    <h2>
                                        <a className="label">${price}</a>
                                    </h2>
                                </div>
                                <div>
                                    <h3 className="header">{category}</h3>
                                </div>
                                <div>
                                    <p>{description}</p>
                                </div>
                                <div className="button" >
                                    <div className="content">
                                        <i className="icon"></i>
                                    </div>
                                    <button className={styles.add} onClick={addToCart}>Add to Cart</button>
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
