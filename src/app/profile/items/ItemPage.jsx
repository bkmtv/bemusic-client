import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URI } from "../../../shared/constants/api";

export default function ItemPage() {
    const { id } = useParams();
    const [itemObj, setItemObj] = useState({});

    useEffect(() => {
        axios.get(URI + "item/byitemId/" + id).then((response) => {
            setItemObj(response.data);
        })
    }, [id]);

    return (
        <>
            <h3>Item Page</h3>
            <p>{itemObj.id}</p>
            <p>{itemObj.name} </p>
        </>
    )
}