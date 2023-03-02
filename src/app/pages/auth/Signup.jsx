import { URI } from "@constants/api";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "./Auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const notify = () =>
    toast.success(<FormattedMessage id="app.alert.sign-up.ok" />);

  const onSubmit = async (data) => {
    await axios.post(URI + "auth/register", data).then(() => {
      notify();
      navigate("/signin");
    });
  };

  return (
    <main className="form-signin w-100 m-auto auth__main">
      <form className="pt-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="h3 text-center">
          <FormattedMessage id="app.auth.sign-up" />
        </div>
        <label className="mt-3 mb-1">
          <FormattedMessage id="app.auth.sign-in.username" />
        </label>
        <input
          {...register("username", { required: true, maxLength: 15 })}
          className="form-control"
        ></input>
        <label className="mt-3 mb-1">
          <FormattedMessage id="app.auth.sign-in.password" />
        </label>
        <input
          type="password"
          {...register("password", { required: true, maxLength: 15 })}
          className="form-control"
        ></input>
        <button className="w-100 btn btn-primary my-3" type="submit">
          <FormattedMessage id="app.auth.sign-up.btn" />
        </button>
      </form>
    </main>
  );
}
