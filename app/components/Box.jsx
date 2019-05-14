const React = require('react');
const { FelaComponent } = require('react-fela');

const Colors = require('../../lib/styles/Colors');
const LoginForm = require('./LoginForm');

const INNER_STYLE = props => {
  return {
    borderBottomWidth: '5px',
    borderColor: Colors.PRIMARY,
    borderLeftWidth: '5px',
    borderRightWidth: '5px',
    borderStyle: 'solid',
    borderTopWidth: '20px',
    boxSizing: 'border-box',
    padding: props.padding || '20px',
    height: props.height || '100%',
    width: props.width || '100%'
  };
}

const OUTER_STYLE = props => {
  return {
    backgroundColor: Colors.BLACK,
    boxSizing: 'border-box',
    height: props.height,
    minHeight: props.height,
    paddingBottom: '10px',
    paddingTop: '10px',
    width: props.width
  }
}

const Box = props => {
  return (
    <FelaComponent
      height={props.height}
      style={OUTER_STYLE}
      width={props.width}>
      <FelaComponent style={INNER_STYLE}>
        {props.children || false}
      </FelaComponent>
    </FelaComponent>
  );
};

module.exports = Box;