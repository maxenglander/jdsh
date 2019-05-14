const React = require('react');

const Presenter = props => {
  return (
    <React.Fragment>
      {props.visible ? props.children : false}
    </React.Fragment>
  );
}

module.exports = Presenter;