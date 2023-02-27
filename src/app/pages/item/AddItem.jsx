import { useState } from "react";

import { URI } from "@constants/api";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import "./Item.css";

export default function AddItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(URI + "item/" + id, formData);
      navigate(-1);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error:", error);
    }
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
      <div className="form m-auto item__form">
        <h4 className="text-center">
          <FormattedMessage id="app.profile.collection.addItem" />
        </h4>
        <form onSubmit={handleSubmit}>
          <label className="mt-3 mb-1">
            <FormattedMessage id="app.profile.collection.itemName" />
          </label>
          <input
            type="text"
            name="name"
            maxLength="25"
            autoComplete="off"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
          <label className="mt-3 mb-1">Tags</label>
          <input
            type="text"
            name="tags"
            maxLength="25"
            value={formData.tags}
            onChange={handleChange}
            className="form-control"
          />
          <button className="btn btn-primary mt-4 w-100" type="submit">
            <FormattedMessage id="app.auth.sign-up.btn" />
          </button>
        </form>
      </div>
    </>
  );
}
