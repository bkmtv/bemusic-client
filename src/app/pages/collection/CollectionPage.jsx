import { useEffect, useState } from "react";

import { URI } from "@constants/api";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./Collection.css";

export default function Collection() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collectionObj, setCollectionObj] = useState({});
  const [listOfItems, setlistOfItems] = useState([]);

  useEffect(() => {
    axios.get(URI + "collection/" + id).then((response) => {
      setCollectionObj(response.data);
    });
    axios.get(URI + "item/" + id).then((response) => {
      setlistOfItems(response.data);
    });
  }, [id]);

  const deleteItem = (id) => {
    axios.delete(URI + "item/" + id).then(() => {
      setlistOfItems(
        listOfItems.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  const deleteCollection = (id) => {
    axios.delete(URI + "collection/" + id);
    navigate(-1);
  };

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-sm btn-outline-secondary mb-3"
      >
        <Icon.ArrowLeftSquare />
        &ensp;
        <FormattedMessage id="app.back" />
      </button>
      <h4>{collectionObj.title}</h4>
      <p>{collectionObj.description}</p>
      <div className="hstack">
        <Link to={`/collection/${id}/additem`}>
          <button className="btn btn-sm btn-outline-success my-3">
            <Icon.PlusLg />
            &ensp;
            <FormattedMessage id="app.profile.collection.addItem" />
          </button>
        </Link>
        <Link to={`/collection/${id}/additem`}>
          <button className="btn btn-sm btn-outline-primary my-3 mx-3">
            <Icon.PencilFill />
            &ensp;
            <FormattedMessage id="app.profile.collection.editCol" />
          </button>
        </Link>
        <button
          className="btn btn-sm btn-outline-danger my-3 ms-auto"
          onClick={() => {
            deleteCollection(collectionObj.id);
          }}
        >
          <Icon.Trash />
          &ensp;
          <FormattedMessage id="app.profile.collection.delete" />
        </button>
      </div>

      <table className="table table-borderless col__table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">
              <FormattedMessage id="app.profile.collection.itemName" />
            </th>
            <th scope="col">Tags</th>
            <th scope="col">Custom field</th>
            <th scope="col">
              <FormattedMessage id="app.user.users.action" />
            </th>
          </tr>
        </thead>
        <tbody>
          {listOfItems.map((item, key) => (
            <tr key={key}>
              <th scope="row">{item.id}</th>
              <td>
                <Link to={`/item/${item.id}`}>{item.name}</Link>
              </td>
              <td>Tags</td>
              <td>Field</td>
              <td>
                <button
                  className="col__button"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  <Icon.Trash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
