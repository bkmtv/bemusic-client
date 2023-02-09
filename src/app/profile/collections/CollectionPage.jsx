import axios from "axios";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useParams } from "react-router-dom";
import { URI } from "../../../shared/constants/api";
import * as Icon from "react-bootstrap-icons";

export default function Collection() {
    const { id } = useParams();
    const [collectionObj, setCollectionObj] = useState({});

    useEffect(() => {
        axios.get(URI + "collection/" + id).then((response) => {
            setCollectionObj(response.data);
        })
    }, [id]);

    return (
        <div className="mt-3">
            <Link to={"/profile/collection/additem"}>
                <button className="btn btn-primary mb-4">
                    <Icon.PlusLg />&ensp;
                    <FormattedMessage id="app.profile.collection.addItem" />
                    </button>
            </Link>
            <h4><FormattedMessage id="app.profile.collection.title" /> {collectionObj.title}</h4>
            <p>{collectionObj.description}</p>
        </div>
    )
}