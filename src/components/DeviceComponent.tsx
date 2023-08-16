import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Link} from "react-router-dom";
import style from '../styles/DeviceComponent.module.scss'

const DeviceComponent = () => {
    const products = useTypedSelector((state) => state.allProducts.products);

    const itemsPerRow = 4; // Чтобы на устройстве было по 4 элемента в ряду
    const rowsCount = Math.ceil(products.length / itemsPerRow);

    const renderList = [];
    for (let row = 0; row < rowsCount; row++) {
        const startIndex = row * itemsPerRow;
        const endIndex = Math.min(startIndex + itemsPerRow, products.length);
        const rowProducts = products.slice(startIndex, endIndex);
        const rowElements = rowProducts.map((product) => {
            const { id, title, image, price, category } = product;
            return (
                <div className={style.item} key={id}>
                    <Link to={`/device/${id}`} className={style.link}>
                        <div className={style.card}>
                            <div className={style.image}>
                                <img src={image} className={style.photo} alt={title}/>
                            </div>
                            <div className={style.content}>
                                <div className={style.header}>{title}</div>
                                <div className={style.price}>${price}</div>
                                <div className={style.title}>{category}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
        renderList.push(
            <div className={style.row}  key={row}>
                {rowElements}
            </div>
        );
    }

    return <div className={style.items} >{renderList}</div>;
};
export default DeviceComponent;
