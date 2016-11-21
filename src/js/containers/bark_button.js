import { connect } from 'react-redux';
import Button from '../components/button.jsx';
import { makeBark, petDog } from '../actions/dog_actions.js';

const mapDispatchToProps = dispatch => ({
  action: (barked) => { dispatch((barked ? petDog : makeBark)()); },
});

const mapStateToProps = state => {
    const barked = state.getIn(['dog', 'hasBarked']);
    return {
      barked: barked,
      actionLabel: barked ? 'Silence' : 'Bark',
    }
};

// Connect is all about reducing the state or the dispatch to props. That is
// it. It just sets up the props for its wrapped componet
export default connect(mapStateToProps, mapDispatchToProps)(Button);
