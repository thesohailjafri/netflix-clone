import React from 'react';
import { IconContext } from "react-icons";
import { AiOutlineLoading3Quarters, } from 'react-icons/ai';
import "../Styles/Loading.css";
function Loading() {
    return (
        <IconContext.Provider value={{ className: "banner-icon loading-icon" }}>
            < AiOutlineLoading3Quarters />
        </IconContext.Provider>
    );
}

export default Loading;
