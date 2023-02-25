import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { UserContext } from "@context/UserContext";
import { useContext } from "react";
import { URI } from "@constants/api";
import "./Sign.css";

export default function Signin() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { setUser } = useContext(UserContext);
    
    const onSubmit = async (data) => {
        await axios.post(URI + "auth/login", data).then(({data}) => {
            if (data.error) {
                alert(data.error);
            } else {
               setUser({
                id: data.id,
                isLoggedIn: true,
                username: data.username
              });
            localStorage.setItem("token", data.token);
            navigate("/");
            }
        })
     }

    return (
        <main className="form-signin w-100 m-auto">
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="h3 text-center"><FormattedMessage id="app.auth.sign-in" /></div>
                <label className="mt-3 mb-1"><FormattedMessage id="app.auth.sign-in.username" /></label>
                <input
                    {...register("username", { required: true, maxLength: 20 })}
                    className="form-control"
                    >
                </input>
                
                <label className="mt-3 mb-1"><FormattedMessage id="app.auth.sign-in.password" /></label>
                <input 
                    {...register("password", { required: true, maxLength: 20 })}
                    className="form-control"
                    >
                </input>
                <button
                    className="w-100 btn btn-primary my-3"
                    type="submit"
                    >
                    <FormattedMessage id="app.auth.sign-in.btn" />
                </button>
            </form>
        </main>
    )
}