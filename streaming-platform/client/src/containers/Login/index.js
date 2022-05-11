import React from 'react';
import { connect } from 'react-redux';
import Login from '../../components/Login';
// import { login, resetUser } from '../../actions/UsuarioActions';

const LoginContainer = (props) => <Login {...props} />;

// const mapStateToProps = (state) => {
//     return {
//         abmLogin: state.abm['ABM_USUARIO'],
//     };
// };

export default connect(null, null)(LoginContainer);
