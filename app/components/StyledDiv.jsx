const React = require('react');
const { createComponent } = require('react-fela');

const DEFAULT_STYLE = props => {
  return {    
    alignItems: props.alignItems || 'default',
    animation: props.animation || 'default',
    background: props.background || 'default',
    backgroundClip: props.backgroundClip || 'default',
    backgroundColor: props.backgroundColor || 'default',
    backgroundImage: props.backgroundImage || 'default',
    backgroundPosition: props.backgroundPosition || 'default',
    backgroundRepeat: props.backgroundRepeat || 'default',
    backgroundSize: props.backgroundSize || 'default',
    bottom: props.bottom || 'default',
    borderRadius: props.borderRadius || 'default',
    boxSizing: props.boxSizing || 'default',
    color: props.color || 'default',
    display: props.display || 'default',
    flex: props.flex || 'default',
    flexDirection: props.flexDirection || 'default',
    fontFamily: props.fontFamily || 'default',
    fontSize: props.fontSize || 'default',
    height: props.height || 'auto',
    justifyContent: props.justifyContent || 'default',
    lineHeight: props.lineHeight || 'default',
    marginLeft: props.marginLeft || 'default',
    minHeight: props.minHeight || 'default',
    overflow: props.overflow || 'default',
    overflowX: props.overflowX || 'default',
    overflowY: props.overFlowY || 'default',
    paddingBottom: props.paddingBottom || 'default',
    paddingLeft: props.paddingLeft || 'default',
    paddingRight: props.paddingRight || 'default',
    paddingTop: props.paddingTop || 'default',
    position: props.position || 'static',
    textAlign: props.textAlign || 'default',
    textTransform: props.textTransform || 'none',
    top: props.top || 'default',
    '-webkitBackgroundClip': props.backgroundClip || false,
    transition: props.transition || false,
    transform: props.transform || false,
    whiteSpace: props.whiteSpace || 'default',
    wordBreak: props.wordBreak || 'default',
    width: props.width || 'auto'
  };
};

const StyledDiv = createComponent(DEFAULT_STYLE, 'div', ['onTransitionEnd']);

module.exports = StyledDiv;