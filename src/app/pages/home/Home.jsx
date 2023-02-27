import { useContext, useEffect, useState } from "react";

import { URI } from "@constants/api";
import { LocaleContext } from "@context/LocaleContext";
import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./Home.css";
import LastAdded from "./LastAdded";
import Footer from "../../components/footer/Footer";

TimeAgo.addLocale(en);
TimeAgo.addLocale(ru);

export default function Home() {
  const { locale } = useContext(LocaleContext);
  const [lastItems, setLastItems] = useState([]);
  const [largeCollections, setLargeCollections] = useState([]);

  useEffect(() => {
    axios.get(URI + "item").then((response) => {
      setLastItems(response.data);
    });
    axios.get(URI + "collection/byitemCount/largest").then((response) => {
      setLargeCollections(response.data);
    });
  }, []);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 mt-4 g-3">
        <div className="col">
          <div className="card p-3 home__card">
            <h5 className="m-2">
              <FormattedMessage id="app.home.lastitems" />
            </h5>
            {lastItems.map((item, key) => (
              <div key={key} className="home__items">
                <Link to={`item/${item.id}`}>{item.name}</Link>
                <div className="text-muted ms-auto">
                  <LastAdded date={item.createdAt} locale={locale} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col">
          <div className="card p-3 home__card">
            <h5 className="m-2">
              <FormattedMessage id="app.home.largestcols" />
            </h5>
            {largeCollections.map((col, key) => (
              <div key={key} className="home__items">
                <Link to={`collection/${col.id}`}>{col.title}</Link>
                <div className="ms-auto badge text-bg-secondary">
                  {col.itemCount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
