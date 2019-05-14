const { connect } = require('react-redux');
const React = require('react');
const { FelaComponent } = require('react-fela');

const ActionCreators = require('../action-creators');
const Colors = require('../../lib/styles/Colors');
const Phases = require('../phases');

const RootComponent = require('../components/RootComponent');

const mapDispatchToProps = dispatch => {
  return {
    changeEmail: (email) => {
      return dispatch(ActionCreators.changeEmail(email));
    },
    submitEmail: (email) => {
      return dispatch(ActionCreators.submitEmail(email));
    },
    transitionToLogin: () => {
      return dispatch(ActionCreators.transitionTo(Phases.LOGIN));
    },
    transitionToStandby: () => {
      return dispatch(ActionCreators.transitionTo(Phases.STANDBY));
    }
  };
};

const mapStateToProps = state => {
  return state;
};

const RootContainer = props => {
  return (
    <RootComponent changeEmail={props.changeEmail}
      email={props.email}
      phase={props.phase}
      submitEmail={props.submitEmail}
      transitionToLogin={props.transitionToLogin} 
      transitionToStandby={props.transitionToStandby} />
  );
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(RootContainer);