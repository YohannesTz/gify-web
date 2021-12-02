import React from "react";
import GifCard from "./GifCard";
import axios from "axios";

//https://g.tenor.com/v1/trending?key=LIVDSRZULELA
const baseUrl = "https://g.tenor.com/v1/trending?key=LIVDSRZULELA";

export default function Home() {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseUrl).then(response => {
            setPosts(response.data);
        });
    }, []);

    if (!posts) return null;

    return (
        <div className="px-8 grid grid-cols-3 gap-4">
            { posts.results.map(post => <GifCard url={post.media[0].mediumgif.url} key={post.id}/>)}
        </div> 
    );

}