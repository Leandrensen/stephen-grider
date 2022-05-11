import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleOnSubmit = (event) => {
    event.preventDefault();

    // TODO - Call an action creator
    // And save the comment

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  handleOnChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleOnChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button
          className="fetch-comments-button"
          onClick={this.props.fetchComments}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
