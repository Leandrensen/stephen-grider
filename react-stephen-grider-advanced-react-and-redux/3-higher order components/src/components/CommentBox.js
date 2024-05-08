import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import { withRouter } from './withRouter';
import requiredAuth from './requiredAuth';

const CommentBox = (props) => {
  const { saveComment, fetchComments } = props;
  const [comment, setComment] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();

    // TODO - Call an action creator
    // And save the comment

    saveComment(comment);
    setComment('');
  };

  const handleOnChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleOnChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className="fetch-comments-button" onClick={fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

export default connect(null, actions)(withRouter(requiredAuth(CommentBox)));
