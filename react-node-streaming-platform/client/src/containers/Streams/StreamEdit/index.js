import React from 'react';
import { connect } from 'react-redux';
import StreamEdit from '../../../components/Streams/StreamEdit';
import { fetchStream, editStream } from '../../../actions';

const StreamEditContainer = (props) => <StreamEdit {...props} />;

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEditContainer);
