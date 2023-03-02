import { useContext, useEffect, useState } from "react";

import { URI } from "@constants/api";
import { UserContext } from "@context/UserContext";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Collection.css";

export default function Collection() {
  const { user } = useContext(UserContext);
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

  const editItem = (id) => {
    navigate(`/item/${id}/edit`);
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
        <div className="back">
          <Icon.ArrowLeftSquare />
          &ensp;
          <FormattedMessage id="app.back" />
        </div>
      </button>
      <button
        onClick={() => {
          navigate(`/profile/${collectionObj.UserId}`);
        }}
        className="btn btn-sm btn-outline-secondary mb-3 mx-2"
      >
        <div className="back">
          <FormattedMessage id="app.btn.toauthor" />
          &ensp;
          <Icon.ArrowRightSquare />
        </div>
      </button>
      <h4>{collectionObj.title}</h4>
      <p>{collectionObj.description}</p>
      {(user.isAdmin || user.id === collectionObj.UserId) && (
        <div className="hstack">
          <Link to={`/collection/${id}/additem`}>
            <button className="btn btn-sm btn-outline-success my-3">
              <Icon.PlusLg />
              &ensp;
              <FormattedMessage id="app.profile.collection.addItem" />
            </button>
          </Link>
          <Link to={`/collection/${id}/edit`}>
            <button className="btn btn-sm btn-outline-primary my-3 mx-2">
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
      )}
      <div className="table-responsive">
        <table className="table table-borderless col__table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">
                <FormattedMessage id="app.profile.collection.itemName" />
              </th>
              <th scope="col">
                <FormattedMessage id="app.profile.collection.tags" />
              </th>
              <th scope="col">
                <FormattedMessage id="app.profile.collection.field" />
              </th>
              <th scope="col">
                <FormattedMessage id="app.profile.collection.field" />
              </th>
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
                <td></td>
                <td></td>
                <td></td>
                <td>
                  {(user.isAdmin || user.id === collectionObj.UserId) && (
                    <>
                      <button
                        className="col__button"
                        onClick={() => {
                          editItem(item.id);
                        }}
                      >
                        <Icon.Pencil />
                      </button>
                      <button
                        className="col__button"
                        onClick={() => {
                          deleteItem(item.id);
                        }}
                      >
                        <Icon.Trash />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
