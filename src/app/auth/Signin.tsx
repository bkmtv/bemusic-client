import { FormattedMessage } from "react-intl";

export default function Signin() {
    return (
        <main className="w-25 m-auto mt-5">
            <form className="pt-5">
                <div className="h3 text-center"><FormattedMessage id="app.auth.sign-in" /></div>
                <label className="mt-3 mb-1"><FormattedMessage id="app.auth.sign-in.email" /></label>
                <input type="email" className="form-control"></input>
                <label className="mt-3 mb-1"><FormattedMessage id="app.auth.sign-in.password" /></label>
                <input type="password" className="form-control"></input>
                <button className="w-100 btn btn-primary my-3" type="submit">
                    <FormattedMessage id="app.auth.sign-in.btn" />
                </button>
            </form>
        </main>
    )
}