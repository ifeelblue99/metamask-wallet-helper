import "./styles.css"
import React from 'react'

export enum LoadingAnimStyleType {
    FullScreen = "FS",
    Custom = "C",
}

export interface LoadingAnimInterface {
    message?: string,
    loaderStyle: LoadingAnimStyleType,
}

const LoadingAnim: React.FC<LoadingAnimInterface> = ({ message, loaderStyle }) => {

    return (

        <div className={"loading-anim " +
            (loaderStyle === "FS" ? " loading-anim-full-screen" : "loading-anim-custom")}>
            <div
                /* developed & designed by https://twitter.com/Amin_Bahmed */
                className="container animation-6">
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
            </div>
            {message && <span className="loading-anim-msg">{message}</span>}
        </div>
    )
}

export default LoadingAnim