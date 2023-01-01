import React from 'react';
import { connect } from 'react-redux';
import StreamShow from '../../../components/Streams/StreamShow';
import { fetchStream } from '../../../actions';

const StreamShowContainer = (props) => <StreamShow {...props} />;

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
    };
}

export default connect(mapStateToProps, { fetchStream })(StreamShowContainer);
