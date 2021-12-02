import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const GifCard = (props) => {
    return (
        <div className="m-8 max-w-sm rounded overflow-hidden shadow-lg">
            <LazyLoadImage alt="Gify" src={props.url} />
        </div>
    );
}

export default GifCard;