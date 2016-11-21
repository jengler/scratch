import { connect } from 'react-redux';
import Message from '../components/message.jsx';

const mapStateToProps = state => ({
  message: state.getIn(['dog', 'hasBarked']) ?
    `The dog is barking ${state.getIn(['dog', 'counter'])}`
    : `The dog is quiet  ${state.getIn(['dog', 'counter'])}`,
});

export default connect(mapStateToProps)(Message);
