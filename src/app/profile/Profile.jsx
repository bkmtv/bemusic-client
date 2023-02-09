import "./Profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useParams, Link } from "react-router-dom";
import { URI } from "../../shared/constants/api";
import UsersList from "../admin/UsersList";
import * as Icon from "react-bootstrap-icons";
import Footer from "./Footer";

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

    function hideImg() {document.getElementById("hideImg").style.display = "none";}

    return (
        <>
        <div className="h5 pt-4"><FormattedMessage id="app.user.hello" /> {userObject.username}</div>
        <Link to={"/profile/createcollection"}>
          <button className="btn btn-success my-3">
            <Icon.FolderPlus />&ensp;<FormattedMessage id="app.profile.createbtn" />
          </button>
        </Link>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {userCollections.map((collection, key) => (
          <div className="col" key={key}>
          <div className="card" id="card">
          <img src={collection.image} className="card-img" alt="" id="hideImg" onError={hideImg} />
            <div className="card-img-overlay">
              <h5 className="card-title">
                {collection.title} <span className="badge bg-secondary mx-1" id="small">12</span>
                </h5>
              <p className="card-text">{collection.topic}</p>
              <p className="card-text">{collection.description.slice(0, 60)}</p>
              <Link to={"/"} className="stretched-link"></Link>
            </div>
          </div>
          </div>
          ))}
        </div>
      {userObject.isAdmin ? 
        <div className="mt-5">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-transparent">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button collapsed" id="acc-header"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne"
                    aria-expanded="false" 
                    aria-controls="collapseOne">
              <Icon.PersonFillGear />&emsp;<FormattedMessage id="app.user.users" />
            </button>
            </h2>
              <div id="collapseOne" 
                  className="accordion-collapse collapse" 
                  aria-labelledby="headingOne" 
                  data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <UsersList />
              </div>
            </div>
            </div>
          </div>
        </div>
        : <></>
        }
        <Footer />
        </>
    )
}