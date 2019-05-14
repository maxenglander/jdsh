const React = require('react');
const { FelaComponent } = require('react-fela');

const BlinkingCursor = require('./BlinkingCursor');
const Colors = require('../../lib/styles/Colors');
const StyledSpan = require('./StyledSpan');

const DEFAULT_STYLE = props => {
  return {
    display: 'flex',
    height: props.height,
    width: props.width || '100%'
  };
};

const LoginFormInput = React.forwardRef((props, ref) => {
  const onInput = e => {
    props.onChange(e.target.textContent);
  };
  
  const onKeyDown = e => {
    if(e.keyCode == 13) {
      e.preventDefault();
      props.onSubmit ? props.onSubmit() : true;
    }
  }
  
  return (
    <FelaComponent 
      height={props.height} 
      width={'100%'}
      style={DEFAULT_STYLE}>
      <StyledSpan 
        backgroundColor={props.backgroundColor}
        caretColor={'transparent'}
        color={props.color}
        contentEditable={"true"}
        border={'none'}
        color={props.color}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
        height={props.height}
        id={props.id}
        innerRef={ref}
        onInput={onInput}
        onKeyDown={onKeyDown}
        outline={'none'} 
        spellCheck={'false'}
        type={props.type}></StyledSpan>
      <BlinkingCursor 
        fillColor={props.backgroundColor}
        height={props.height} 
        width={props.height} />
    </FelaComponent>
  );
});    

module.exports = LoginFormInput;