// import { FormattedMessage } from "react-intl";
import "./Profile.css";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { URI } from "../../shared/constants/api";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FormControl } from "react-bootstrap";
import { useState } from "react";

export default function CreateCollection() {
    // const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [topic, setTopic] = useState();
    const [desc, setDesc] = useState("");
    
    const onSubmit = (data) => {
         axios.post(URI + "collection", data, {
            headers: { token: localStorage.getItem("token") }, }).then((data) => {
            console.log(data.data);
        })
     }

    return (
        <main>
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="h3 text-center">Create a new collection</div>
                
                <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                <label className="mt-3 mb-1">Title</label>
                <input
                    {...register("title", { required: true, maxLength: 20 })}
                    className="form-control"
                    >
                </input>
                <label className="mt-3 mb-1">Description</label>
                <ReactQuill value={desc} onChange={setDesc} id="descriprtion" theme="snow" />
                </div>

                <div className="col">
                <label className="mt-3 mb-1">Topic </label>
                
                <FormControl as="select" value={topic} onChange={e => {setTopic(e.target.value)}} aria-label="Default select example">
                    <option value="Media">Media</option>
                    <option value="People">People</option>
                    <option value="Things">Things</option>
                </FormControl>

                <label className="mt-3 mb-2" htmlFor="file">Image</label><br />
                <input type="file" id="img" name="img" accept="image/*" /><br />
                <button
                    className="btn btn-success my-4"
                    type="submit"
                    >
                    Submit
                </button>
                </div>
                </div>
            </form>
        </main>
    )
}