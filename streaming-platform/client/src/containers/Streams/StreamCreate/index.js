import React from 'react';
import { connect } from 'react-redux';
import StreamCreate from '../../../components/Streams/StreamCreate';
import { createStream } from '../../../actions';

const StreamCreateContainer = (props) => <StreamCreate {...props} />;

export default connect(null, { createStream })(StreamCreateContainer);