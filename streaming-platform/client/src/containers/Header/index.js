import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { signIn, signOut } from '../../actions';

const HeaderContainer = (props) => <Header {...props} />;

const mapStateToProps = (state) => {
    return { isSignedIn: state.googleAuth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(HeaderContainer);
