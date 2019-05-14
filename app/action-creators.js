const ActionTypes = require('./action-types');
const Phases = require('./phases');

function changeEmail(email) {
  return {
    email,
    type: ActionTypes.CHANGE_EMAIL
  };
}

function submitEmail(email) {
  return dispatch => {
    fetch('/email', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        email
      })
    });
    return dispatch(transitionTo(Phases.ACCESS_GRANTED));
  }
}

function transitionTo(phase) {
  return {
    phase,
    type: ActionTypes.TRANSITION_TO
  };
}

module.exports = {
  changeEmail,
  submitEmail,
  transitionTo
}