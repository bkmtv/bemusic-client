import { useContext, useEffect, useState } from "react";

import { URI } from "@constants/api";
import { LocaleContext } from "@context/LocaleContext";
import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
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
      <div className="row mt-4">
        <div className="col card p-3 m-1 home__card">
          <h5 className="m-2">Last added items</h5>
          {lastItems.map((item, key) => (
            <div key={key} className="home__items">
              <Link to={`item/${item.id}`}>{item.name}</Link>
              <div className="text-muted ms-auto">
                <LastAdded date={item.createdAt} locale={locale} />
              </div>
            </div>
          ))}
        </div>

        <div className="col card p-3 m-1 home__card">
          <h5 className="m-2">Largest collections</h5>
          {largeCollections.map((col, key) => (
            <div key={key} className="home__items">
              <Link to={`collection/${col.id}`}>{col.title}</Link>
              <div className="text-muted ms-auto">{col.itemCount} items</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
