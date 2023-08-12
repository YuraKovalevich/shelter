import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import DeviceList from "../components/DeviceList";

const Shop = () => {
    return (
        <div>
           <DeviceList/>
        </div>
    );
};

export default Shop;
