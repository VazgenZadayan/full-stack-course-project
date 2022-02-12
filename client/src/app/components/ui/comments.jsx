import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CommentsList, { AddCommentForm } from "../common/comments";
import {
    createComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList,
    removeComment,
} from "../../store/comments";

import { orderBy } from "lodash";

const Comments = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCommentsList(userId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  const isLoading = useSelector(getCommentsLoadingStatus());

  const comments = useSelector(getComments());
  const handleSubmit = (data) => {
    dispatch(createComment({ ...data, pageId: userId }));
  };
  const handleRemoveComment = (id) => {
    dispatch(removeComment(id));
  };
  const sortedComments = orderBy(comments, ["created_at"], ["desc"]);
  return (
    <>
      <div className="card mb-2">
        <div className="card-body ">
          <AddCommentForm onSubmit={handleSubmit} />
        </div>
      </div>
      {sortedComments.length > 0 && (
        <div className="card mb-3">
          <div className="card-body ">
            <h2>Comments</h2>
            <hr />
            {!isLoading ? (
              <CommentsList
                comments={sortedComments}
                onRemove={handleRemoveComment}
              />
            ) : (
              "loading..."
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
