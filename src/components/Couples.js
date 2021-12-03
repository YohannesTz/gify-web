import React from "react";
import GifCard from "./GifCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const keywords = ["love", "hugs", "miss+you", "wink", "smile", "thank+you"];

const CouplesGifsUrl = "https://g.tenor.com/v1/search?tag=" + keywords[Math.floor(Math.random() * keywords.length)] +"&locale=en&key=LIVDSRZULELA";

export default function Couples() {
    const [items, setItems] = React.useState(null);
    const [next, setNext] = React.useState(null);
    
    React.useEffect(() => {
        axios.get(CouplesGifsUrl).then(response => {
            setItems(response.data.results);
            setNext(response.data.next);
        });
    }, []);

    const fetchData = async () => {
        console.log("fetch data was called inside the async");
        console.log(CouplesGifsUrl + "&pos=" + next);
        axios.get(CouplesGifsUrl + "&pos=" + next).then(response => {
            setItems([...items, ...response.data.results]);
            setNext(response.data.next);
        });
    };

    if (!items) return null;

    return (
        <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={true}
            loader={<div className='justify-self-center'><h4>Loading...</h4></div>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <div className="px-8 grid grid-cols-3 gap-4">
                {items.map(post => <GifCard url={post.media[0].gif.url} alt={post.media[0].content_description} key={post.id} />)}
            </div>
        </InfiniteScroll>
    );
}