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
import { storage } from '../../firebase';
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { FormattedMessage } from "react-intl";

export default function CreateCollection() {
    // const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [topic, setTopic] = useState();
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState(null);
    
    const onSubmit = (data) => {
         axios.post(URI + "collection", data, {
            headers: { token: localStorage.getItem("token") }, }).then((data) => {
            console.log(data.data);
        })
     }

     const uploadImage = () => {
        if (image == null) return;
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        uploadBytes(imageRef, image).then(() => {
            alert("Success");
        })
     }

    return (
        <main>
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="h4"><FormattedMessage id="app.profile.createclc" /></div>
                
                <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                <label className="mt-3 mb-1"><FormattedMessage id="app.profile.createclc.title" /></label>
                <input
                    {...register("title", { required: true, maxLength: 20 })}
                    className="form-control"
                    >
                </input>
                <label className="mt-3 mb-1"><FormattedMessage id="app.profile.createclc.desc" /></label>
                <ReactQuill value={desc} onChange={setDesc} id="descriprtion" theme="snow" />
                </div>

                <div className="col">
                <label className="mt-3 mb-1"><FormattedMessage id="app.profile.createclc.topic" /></label>
                
                <FormControl as="select" value={topic} onChange={e => {setTopic(e.target.value)}} aria-label="Default select example">
                    <option value="Media"><FormattedMessage id="app.profile.createclc.media" /></option>
                    <option value="People"><FormattedMessage id="app.profile.createclc.people" /></option>
                    <option value="Things"><FormattedMessage id="app.profile.createclc.things" /></option>
                </FormControl>

                <label className="mt-3 mb-2" htmlFor="file"><FormattedMessage id="app.profile.createclc.img" /></label>
                <br />
                <input 
                    type="file"
                    id="img" 
                    name="img" 
                    onChange={(e) => {setImage(e.target.files[0])}} 
                    accept="image/*" /><br />
                <button
                    className="btn btn-success my-4"
                    type="submit"
                    onClick={uploadImage}
                    >
                    Submit
                </button>
                </div>
                </div>
            </form>
        </main>
    )
}