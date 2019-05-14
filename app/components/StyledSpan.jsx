const React = require('react');
const { createComponent } = require('react-fela');

const StyledSpan = createComponent(props => {
  return {
    backgroundColor: props.backgroundColor || 'inherit',
    border: props.border || 'default',
    caretColor: props.caretColor || 'default',
    color: props.color || 'inherit',
    fontFamily: props.fontFamiy || 'default',
    fontSize: props.fontSize || 'inherit',
    height: props.height || 'auto',
    outline: props.outline || 'default'
  };
}, 'span', ['contentEditable', 'id', 'type', 'onInput', 'onKeyDown', 'spellCheck']);

module.exports = StyledSpan;