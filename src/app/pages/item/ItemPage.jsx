import { useContext, useEffect, useState } from "react";

import { URI } from "@constants/api";
import { ThemeContext } from "@context/ThemeContext";
import { UserContext } from "@context/UserContext";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./Item.css";

export default function ItemPage() {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [itemObj, setItemObj] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(URI + "item/byitemId/" + id).then((response) => {
      setItemObj(response.data);
    });
    axios.get(URI + "comment/" + id).then((response) => {
      setComments(response.data);
    });
  }, [id]);

  const notify = () => toast.info(<FormattedMessage id="app.alert.signin" />);

  const addComment = () => {
    axios
      .post(
        URI + "comment",
        { commentBody: newComment, ItemId: id },
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
        if (response.data.error) {
          notify();
          return;
        }
        const commentToAdd = {
          commentBody: newComment,
          username: response.data.username,
          UserId: response.data.UserId,
          createdAt: new Date(),
        };
        setComments([...comments, commentToAdd]);
        setNewComment("");
      });
  };

  const deleteComment = (id) => {
    axios
      .delete(URI + "comment/" + id, {
        headers: { token: localStorage.getItem("token") },
      })
      .then(() => {
        setComments(
          comments.filter((val) => {
            return val.id !== id;
          })
        );
      });
  };

  const likeItem = (itemId) => {
    axios
      .post(
        URI + "like",
        { ItemId: itemId },
        { headers: { token: localStorage.getItem("token") } }
      )
      .then((response) => {
        if (response.data.error) {
          notify();
          return;
        }
        if (response.data.liked) {
          setItemObj({ ...itemObj, Likes: [...itemObj.Likes, 1] });
        } else {
          const likes = itemObj.Likes;
          likes.pop();
          setItemObj({ ...itemObj, Likes: likes });
        }
      });
  };

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-sm btn-outline-secondary mb-3"
      >
        <div className="back">
          <Icon.ArrowLeftSquare />
          &ensp;
          <FormattedMessage id="app.back" />
        </div>
      </button>
      <button
        onClick={() => {
          navigate(`/collection/${itemObj.CollectionId}`);
        }}
        className="btn btn-sm btn-outline-secondary mb-3 mx-2"
      >
        <div className="back">
          <FormattedMessage id="app.btn.tocollection" />
          &ensp;
          <Icon.ArrowRightSquare />
        </div>
      </button>

      <h3>{itemObj.name}</h3>
      <div className="like">
        <Icon.StarFill
          className="item__like"
          onClick={() => likeItem(itemObj.id)}
        />
        <label className="item__counter">
          {Array.isArray(itemObj.Likes) ? itemObj.Likes.length : 0}
        </label>
      </div>

      <label className="mt-3 mb-1">
        <FormattedMessage id="app.item.comment" />
      </label>
      <textarea
        type="text"
        autoComplete="off"
        className="form-control"
        id="comment"
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
      <button className="btn btn-sm btn-primary my-3" onClick={addComment}>
        <FormattedMessage id="app.auth.sign-up.btn" />
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />

      <div>
        {comments.map((comment, key) => {
          return (
            <div className="card my-2 item__comment" key={key}>
              <div className="card-body">
                <div className="card-link small text-muted mb-2">
                  <Icon.FilePerson />
                  <Link to={`/profile/${comment.UserId}`}>
                    <strong>{comment.username}</strong>
                  </Link>
                  <div className="mx-2">
                    {new Date(comment.createdAt).toLocaleDateString("ru-RU", {
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </div>
                  {(user.isAdmin || user.id === comment.UserId) && (
                    <button
                      className="comment__btn ms-auto"
                      onClick={() => {
                        deleteComment(comment.id);
                      }}
                    >
                      <Icon.XSquare />
                    </button>
                  )}
                </div>
                {comment.commentBody}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
