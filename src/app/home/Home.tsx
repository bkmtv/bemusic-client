import { FormattedMessage } from "react-intl";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
        <div className="h4 py-5"><FormattedMessage id="app.home.welcome" />!</div>
        <Footer />
        </>
    )
}