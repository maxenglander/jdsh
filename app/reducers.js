/* reducers */

const ActionTypes = require('./action-types');
const Phases = require('./phases');

const INITIAL_STATE = {
  email: '',
  phase: Phases.STANDBY
};

function reduce(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ActionTypes.TRANSITION_TO:
      return Object.assign({}, state, {
        phase: action.phase
      });
    case ActionTypes.CHANGE_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      });
    case ActionTypes.SUBMIT_EMAIL:
      return state;
    default:
      return state;
  }
}

module.exports = reduce;
