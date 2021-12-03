import React from "react";
import GifCard from "./GifCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

//https://g.tenor.com/v1/trending?key=LIVDSRZULELA
const baseUrl = "https://g.tenor.com/v1/trending?key=LIVDSRZULELA&limit=25";

export default function Home() {
    const [posts, setPosts] = React.useState(null);
    const [next, setNext] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseUrl).then(response => {
            setPosts(response.data.results);
            setNext(response.data.next);
        });
    }, []);

    const fetchData = async () => {
        console.log("fetch data was called inside the asuync");
        console.log(baseUrl + "&pos=" + next);
        axios.get(baseUrl + "&pos=" + next).then(response => {
            setPosts([...posts, ...response.data.results]);
            setNext(response.data.next);
        });
    };

    if (!posts) return null;

    return (

        <InfiniteScroll
            dataLength={posts.length}
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
                {posts.map(post => <GifCard url={post.media[0].gif.url} alt={post.media[0].content_description} key={post.id} />)}
            </div>
        </InfiniteScroll>

    );

}