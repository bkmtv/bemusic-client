import "./Profile.css";
import { useContext, useEffect, useState } from "react";

import { URI } from "@constants/api";
import { UserContext } from "@context/UserContext";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { useParams, Link } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [userObject, setUserObject] = useState({ id: id, username: "" });
  const [userCollections, setUserCollections] = useState([]);

  useEffect(() => {
    axios.get(URI + "profile/user/" + id).then((response) => {
      setUserObject(response.data);
    });
    axios.get(URI + "collection/byuserId/" + id).then((response) => {
      setUserCollections(response.data);
    });
  }, [id]);

  function hideImg() {
    document.getElementById("hideImg").style.display = "none";
  }

  return (
    <>
      <div className="h5 py-4 hstack">
        <FormattedMessage id="app.user.hello" /> {userObject.username}
        {user.isAdmin ? (
          <Link to={"/profile/admin"} className="ms-auto profile__admin">
            <Icon.PersonFillGear /> <FormattedMessage id="app.user.users" />
          </Link>
        ) : (
          <></>
        )}
      </div>
      {user.id === userObject.id && (
        <Link to={"/createcollection"}>
          <button className="btn btn-sm btn-success my-3">
            <Icon.FolderPlus />
            &ensp;
            <FormattedMessage id="app.profile.createbtn" />
          </button>
        </Link>
      )}
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {userCollections.map((collection, key) => (
          <div className="col" key={key}>
            <div className="card profile__card">
              <img
                src={collection.image}
                alt=""
                id="hideImg"
                onError={hideImg}
              />
              <div className="card-img-overlay">
                <div className="h5 card-title">{collection.title}</div>
                <div className="badge text-bg-secondary profile__badge">
                  {collection.itemCount}
                </div>
                <p className="card-text profile__topic">{collection.topic}</p>
                <p className="card-text text-truncate">
                  {collection.description}
                </p>
                <Link
                  to={`/collection/${collection.id}`}
                  className="stretched-link"
                ></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
