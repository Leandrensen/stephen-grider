import React from 'react';
import { connect } from 'react-redux';
import StreamDelete from '../../../components/Streams/StreamDelete';
import { fetchStream, deleteStream } from '../../../actions';

const StreamDeleteContainer = (props) => <StreamDelete {...props} />;

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDeleteContainer);
