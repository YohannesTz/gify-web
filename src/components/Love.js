import React from "react";
import GifCard from "./GifCard";

const Love = () => {
    return (
        <div className="px-8 grid grid-cols-3 gap-4">
            <GifCard/>
            <GifCard/>
            <GifCard/>
        </div>        
    );
}

export default Love;