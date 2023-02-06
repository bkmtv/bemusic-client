import "./Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams, Link } from "react-router-dom";
import { URI } from "../../shared/constants/api";
import UsersList from "../admin/UsersList";
import * as Icon from "react-bootstrap-icons";

export default function Profile() {
    const { id } = useParams();
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

    return (
        <>
        <div className="h5 pt-4"><FormattedMessage id="app.user.hello" /> {userObject.username}</div>
        <button className="btn btn-primary mb-3">Create a collection</button>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {userCollections.map((collection, key) => (
          <div className="col">
          <div className="card" id="card" key={key}>
            <div className="card-body">
              <h5 className="card-title">
                {collection.title} <span className="badge bg-secondary mx-1" id="small">12</span>
                </h5>
              <p className="card-text">{collection.topic}</p>
              <p className="card-text">{collection.description}</p>
              <Link to={"/"} className="stretched-link"></Link>
            </div>
          </div>
          </div>
          ))}
        </div>

      {userObject.isAdmin ? 
        <div className="mt-5">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item bg-transparent">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              <Icon.PersonFillGear />&emsp;<FormattedMessage id="app.user.users" />
            </button>
            </h2>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <UsersList />
              </div>
            </div>
            </div>
          </div>
        </div>
        : <></>}
        </>
    )
}