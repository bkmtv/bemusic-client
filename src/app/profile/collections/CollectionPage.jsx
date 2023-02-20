import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { URI } from "../../../shared/constants/api";
import * as Icon from "react-bootstrap-icons";

export default function Collection() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [collectionObj, setCollectionObj] = useState({});
    const [listOfItems, setlistOfItems] = useState([]);

    useEffect(() => {
        axios.get(URI + "collection/" + id).then((response) => {
            setCollectionObj(response.data);
        })
        axios.get(URI + "item/" + id).then((response) => {
            setlistOfItems(response.data);
        })
    }, [id]);

    const deleteItem = (id) => {
        axios.delete(URI + "item/" + id).then(() => {
            setlistOfItems(listOfItems.filter((val) => {
                return val.id !== id;
              }));
        })
    };

    return (
        <>
            <button onClick={() => {navigate(-1)}} className="btn btn-sm btn-outline-secondary mb-3">
                <Icon.ArrowLeftSquare />&ensp;Back to list of collections
            </button>
            <h4>{collectionObj.title}</h4>
            <p>{collectionObj.description}</p>
            <Link to={`/profile/collection/${id}/additem`}>
                <button className="btn btn-sm btn-primary my-3">
                    <Icon.PlusLg />&ensp;
                    <FormattedMessage id="app.profile.collection.addItem" />
                </button>
            </Link>

            <table className="table" id="custom-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Tags</th>
                <th scope="col">Custom field</th>
                <th scope="col"><FormattedMessage id="app.user.users.action" /></th>
              </tr>
            </thead>
            <tbody>
              {listOfItems.map((item, key) => (
              <tr key={key}>
                <th scope="row">{item.id}</th>
                <td><Link to={`/item/${item.id}`}>{item.name}</Link></td>
                <td>Tags</td>
                <td>Field</td>
                <td><button onClick={() => {deleteItem(item.id)}}><Icon.Trash /></button></td>
              </tr>
              ))}
            </tbody>
          </table>

        </>
    )
}