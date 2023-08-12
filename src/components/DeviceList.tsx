import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeviceComponent from './DeviceComponent';
import axios from 'axios';
import { setProducts } from '../actions/ProductActions';
import {useTypedSelector} from "../hooks/useTypedSelector";

const DeviceList = () => {
    const products = useTypedSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            dispatch(setProducts(response.data));
        } catch (e) {
            console.log('Error', e);
        }
    };

    useEffect(() => {
        fetchProducts()
    },[]);


    return (
        <div className="ui grid container">
            <DeviceComponent />
        </div>
    );
};

export default DeviceList;
