import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import DeviceComponent from "./DeviceComponent";
import {useTypedSelector} from "../hooks/useTypedSelector";
import axios from "axios";
import {setProducts} from "../actions/ProductActions";

const DeviceList = () => {
    const products = useTypedSelector((state)=>state);
    const dispatch=useDispatch()
    const fetchProducts=async ()=>{
        try {
            const response=await axios
                .get('https://fakestoreapi.com/products')
            dispatch(setProducts(response.data))
        }catch (e) {
            console.log("Error",e)
        }
    };
    useEffect(()=>{
        fetchProducts()
    });
    console.log('Products',products)
    return (
        <div className="ui grid container">
            <DeviceComponent/>
        </div>
    );
};

export default DeviceList;
