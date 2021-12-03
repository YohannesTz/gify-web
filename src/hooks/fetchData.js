import axios from "axios";

const baseUrl = "https://g.tenor.com/v1/trending?key=LIVDSRZULELA";

const FetchData = async () => {
    console.log("fetching more data..");

    let data = [];

    axios.get(baseUrl).then(response => {
        console.log(response);
        data = response.data;
    }); 

    console.log(data);

    return data;
}

export default FetchData;