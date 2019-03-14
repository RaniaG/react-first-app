import React from 'react';
import './loading.scss';
import loadingGif from "../../../assets/loading.gif";

export const LoadingPage = () => {
    return (
        <div className="loading-container">
            <img src={loadingGif} alt="" />
        </div>

    )
}