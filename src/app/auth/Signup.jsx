import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import routes from "../../shared/constants/routes";
import { useForm } from "react-hook-form";

export default function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        await axios.post("http://localhost:5000/api/auth/register", data).then(() => {
            alert("OK");
            navigate(routes.SIGNIN);
        })
     }

    return (
        <main className="w-25 m-auto mt-5">
            <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="h3 text-center"><FormattedMessage id="app.auth.sign-up" /></div>
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
                    <FormattedMessage id="app.auth.sign-up.btn" />
                </button>
            </form>
        </main>
    )
}