import * as Icon from "react-bootstrap-icons";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="my-5 hstack">
      <div className="text-muted">
        Created during an internship at Itransition.
      </div>
      <div className="ms-auto">
        <a href="https://github.com/bkmtv" target="_blank" rel="noreferrer">
          <Icon.Github className="mx-2" />
          bkmtv
        </a>
      </div>
    </footer>
  );
}
