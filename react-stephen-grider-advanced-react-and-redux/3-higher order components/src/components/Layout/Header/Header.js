import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from 'actions';

const Header = (props) => {
  const { auth, changeAuth } = props;

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post a comment</Link>
      </li>
      <li>
        {auth ? (
          <button onClick={() => changeAuth(false)}>Sign Out</button>
        ) : (
          <button onClick={() => changeAuth(true)}>Sign In</button>
        )}
      </li>
    </ul>
  );
};

function mapStateToProps(state) {
  console.log({ state });
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(Header);
