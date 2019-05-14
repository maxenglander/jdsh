const React = require('react');
const { createComponent } = require('react-fela');

const DEFAULT_STYLE = props => {
  return props;
}

const StyledCanvas = createComponent(DEFAULT_STYLE, 'canvas', ['height', 'width']);
  
const StyledCanvasWrapper = props => {
  let height = 'auto';
  let width = 'auto';
  
  if(props.height) {
    height = props.height.replace("px", "");
  }
  
  if(props.width) {
    width = props.width.repace("px", "");
  }
  
  return (
    <StyledCanvas id={props.id}
      height={height}
      position={props.position}
      width={width} />
  );
}

module.exports = StyledCanvas;