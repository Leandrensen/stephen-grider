import React from 'react';
import { connect } from 'react-redux';
import Page404 from '../../components/Page404';

const Page404Container = (props) => <Page404 {...props} />;

// const mapStateToProps = state => {
//     return { error: state.auth.error, loading: state.auth.loading };
// };

export default connect(null, null)(Page404Container);
