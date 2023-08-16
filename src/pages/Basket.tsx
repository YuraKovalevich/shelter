import React, {useEffect, useState} from 'react';
import styles from '../styles/Basket.module.scss'
import {useTypedSelector} from "../hooks/useTypedSelector";
import {ActionTypes} from "../utils/consts";
import {useDispatch} from "react-redux";

const Basket = () => {
    const {cart} = useTypedSelector((state) => state.cart);
    const dispatch = useDispatch()
    const [total, setTotal] = useState<number>();
    const [selectedProductItem, setSelectedProductItem] = useState<number | null>(null);

    const removeFromCart = (productId: number) => {
        dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: { id: productId } });
    };

    useEffect(() => {
        const calculatedTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
        setTotal(calculatedTotal);
    }, [cart])
    return (
        <div className={styles.home}>
            <div className={styles.productContainer}>
                <div className={styles.item}>
                    {cart.map((product) =>
                        <div className={styles.content} key={product.id}>
                            <img className={styles.img} src={product.image} alt={product.title} />
                            {product.title}
                            <button className={styles.button} onClick={() => removeFromCart(product.id)}>X</button>
                        </div>
                )}
                </div>
                <div className={styles.filteresSum}>
                    <span className={styles.title}>
                        Subtotal ({cart.length}) items
                    </span>
                    <span className={styles.total}>Total:{total}</span>
                    <button className={styles.btn} type="button">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;
