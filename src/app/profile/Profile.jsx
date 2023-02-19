import "./Profile.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams, Link } from "react-router-dom";
import { URI } from "../../shared/constants/api";
import * as Icon from "react-bootstrap-icons";
import { UserContext } from "../../shared/context/UserContext";

export default function Profile() {
    const { id } = useParams();
    const { user } = useContext(UserContext);
    const [userObject, setUserObject] = useState({id: id, username: "", isAdmin: ""});
    const [userCollections, setUserCollections] = useState([]);
  
    useEffect(() => {
        axios.get(URI + "profile/user/" + id).then((response) => {
            setUserObject(response.data);
        })
        axios.get(URI + "collection/byuserId/" + id).then((response) => {
            setUserCollections(response.data);
        })
    }, [id]);

    function hideImg() {document.getElementById("hideImg").style.display = "none";}

    return (
        <>
        <div className="h5 pt-4 hstack">
          <FormattedMessage id="app.user.hello" /> {userObject.username}
          {user.isAdmin ?
            <Link to={"/profile/admin"} className="ms-auto admin">
              <Icon.PersonFillGear /> <FormattedMessage id="app.user.users" /> 
            </Link>
            : <></>
          }
        </div>
        <Link to={"/profile/createcollection"}>
          <button className="btn btn-success my-3">
            <Icon.FolderPlus />&ensp;<FormattedMessage id="app.profile.createbtn" />
          </button>
        </Link>
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {userCollections.map((collection, key) => (
          <div className="col" key={key}>
          <div className="card" id="card">
          <img src={collection.image} className="card-img" alt="" id="hideImg" onError={hideImg} />
            <div className="card-img-overlay">
              <h5 className="card-title">
                {collection.title}
                <span className="badge bg-secondary mx-1" id="small">12</span>
              </h5>
              <p className="card-text">{collection.topic}</p>
              <p className="card-text text-truncate">{collection.description}</p>
              <Link to={`/profile/collection/${collection.id}`} className="stretched-link"></Link>
            </div>
          </div>
          </div>
          ))}
        </div>
        </>
    )
}