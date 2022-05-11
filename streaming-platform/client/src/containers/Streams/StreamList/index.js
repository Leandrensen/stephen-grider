import React from 'react';
import { connect } from 'react-redux';
import StreamList from '../../../components/Streams/StreamList';
import { fetchStreams } from '../../../actions'

const StreamListContainer = (props) => <StreamList {...props} />;

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.googleAuth.userId,
        isSignedIn: state.googleAuth.isSignedIn,
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamListContainer);
