/*
The whole purpose here is to collect codes that belong to the same goal into one function. In this example, the followin g function returns a function that can be used to search for videos and an object of videos. The input here is the default search parameter that the search function needs.

*/
import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async(term) => {
        const response = await youtube.get("/search/", {
            params: { q: term },
        });
        setVideos(response.data.items);
    };
    return [videos, search];
};
export default useVideos;