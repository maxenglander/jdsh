const React = require('react');
const { FelaComponent } = require('react-fela');

const DEFAULT_STYLE = (props, renderer) => {
  const keyframe = renderer.renderKeyframe(() => {
    return {
      '50%': {
        opacity: 0
      }
    }
  });
  
  return {
    animation: `${keyframe} 1s linear infinite`,
    backgroundColor: props.fillColor,
    height: props.height,
    minHeight: props.height,
    minWidth: props.width,
    width: props.width
  };
};

const BlinkingCursor = props => {
  return (
    <FelaComponent 
      fillColor={props.fillColor}
      height={props.height}
      style={DEFAULT_STYLE} 
      width={props.width} />
  );
}

module.exports = BlinkingCursor;