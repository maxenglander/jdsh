const React = require('react');

const LoginFormLabel = props => {
  return (
    <label htmlFor={props.form}>{props.children}</label>
  );
};

module.exports = LoginFormLabel;