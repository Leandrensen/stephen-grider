import React from 'react';
import { connect } from 'react-redux';
import Logout from '../../components/Logout/Logout';
import { signOut } from '../../actions';

const LogoutContainer = (props) => <Logout {...props} />;

export default connect(null, { signOut })(LogoutContainer);
