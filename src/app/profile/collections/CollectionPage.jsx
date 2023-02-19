import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { URI } from "../../../shared/constants/api";
import * as Icon from "react-bootstrap-icons";

export default function Collection() {
    const { id } = useParams();
    const [collectionObj, setCollectionObj] = useState({});
    const [listOfItems, setlistOfItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        axios.get(URI + "collection/" + id).then((response) => {
            setCollectionObj(response.data);
        })
        axios.get(URI + "item/" + id).then((response) => {
            setlistOfItems(response.data);
        })
    }, [id]);

    const addItem = () => {
        axios.post(URI + "item", { name: newItem, CollectionId: id}).then(() => {
            const itemToAdd = { name: newItem };
            setlistOfItems([...listOfItems, itemToAdd]);
            setNewItem("");
        })
    }

    return (
        <div className="my-4">
            <h4>{collectionObj.title}</h4>
            <p>{collectionObj.description}</p>

            <div className="w-50">
                <input
                    className="form-control" 
                    type="text" 
                    value={newItem}
                    onChange={(e) => {setNewItem(e.target.value)}}
                />
                <button onClick={addItem} className="btn btn-primary my-3">
                    <Icon.PlusLg />&ensp;
                    <FormattedMessage id="app.profile.collection.addItem" />
                </button>
            </div>

            <div>{listOfItems.map((item, key) => (
                <ul key={key}>
                    <li><Link to={`/item/${item.id}`}>{item.name}</Link></li>
                </ul>
            ))}</div>
        </div>
    )
}