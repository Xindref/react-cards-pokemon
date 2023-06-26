import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";

export const useFlip = () => {
    const [currentDirection, setCurrentDirection] = useState(true);
    const flipCard = () => {
        setCurrentDirection(faceDirection => !faceDirection);
    };

    return [currentDirection, flipCard]
}

export const useAxios = (urlToRequest) => {
    const [data, setData] = useState([]);
    const axiosRequest = async name => {
        const response = (typeof name !== 'object') ? await axios.get(`${urlToRequest}/${name}`) : await axios.get(urlToRequest)
        setData(data => [...data, { ...response.data, id: uuidv4() }]);
    };

    return [data, axiosRequest]
}

export default useFlip;