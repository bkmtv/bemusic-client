import { FormattedMessage } from "react-intl";
import Form from "./Form";

export default function CreateCollection() {

    return (
        <div>
            <h4 className="mt-5"><FormattedMessage id="app.profile.createclc" /></h4>
            <Form />
        </div>
    )
}