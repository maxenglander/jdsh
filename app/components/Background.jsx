const React = require('react');
const { FelaComponent } = require('react-fela');

const Colors = require('../../lib/styles/Colors');
                       
const DEFAULT_STYLE = props => {
  return {
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: props.minHeight,
    minWidth: props.minWidth,
    position: 'relative'
  };
}

const Background = props => {
  return (
    <FelaComponent style={DEFAULT_STYLE}>
      {props.children || false}
    </FelaComponent>
  );
};

module.exports = Background;