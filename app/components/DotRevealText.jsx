const React = require('react');
const { createComponent } = require('react-fela');

const Colors = require('../../lib/styles/Colors');

const DEFAULT_STYLE = (props, renderer) => {
  return {
    alignItems: props.alignItems,
    background: props.background,
    backgroundSize: props.backgroundSize,
    color: 'transparent',
    display: props.display,            
    flexDirection: props.flexDirection,
    fontFamily: props.fontFamily,
    fontSize: props.fontSize,
    height: props.height,
    justifyContent: props.justifyContent,
    width: props.width,
    '-webkitBackgroundSize': props.backgroundSize,
  };
}

const CustomComponent = createComponent(DEFAULT_STYLE);
  
class DotRevealText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'none',
      backgroundSize: 'auto'
    };
    this._animate = this._animate.bind(this);
    this._ref = React.createRef();
  }
  
  componentDidMount() {  
    this._ref.current.style['-webkit-background-clip'] = 'text';
    this._animate();
  }
  
  render() {
    return (
      <CustomComponent alignItems={this.props.alignItems}
        background={this.state.background}
        backgroundSize={this.state.backgroundSize}
        duration={this.props.duration}
        display={this.props.display}
        flex={this.props.flex}
        flexDirection={this.props.flexDirection}
        fontFamily={this.props.fontFamily}
        fontSize={this.props.fontSize}
        height={this.props.height}
        innerRef={this._ref}
        justifyContent={this.props.justifyContent}
        style={this.state.style}
        width={this.props.width}>{this.props.text}</CustomComponent>
    );
  }
  
  _animate(dotSize = 1, dotSpace = 40) {
    if(dotSpace <= dotSize) {
      this._ref.current.style['background-size'] = '1px 1px';
      this._ref.current.style['-webkit-background-size'] = '1px 1px';
      this.props.finish();
      return;
    }
    
    this.setState({ 
      background: `
        linear-gradient(90deg, ${Colors.BLACK} ${dotSpace - dotSize}px, transparent 1%) center, 
        linear-gradient(${Colors.BLACK} ${dotSpace - dotSize}px, transparent 1%) center, ${Colors.PRIMARY}
      `,
      backgroundSize: `${dotSpace}px ${dotSpace}px`
    });
  
    setTimeout((function() {
      this._animate(dotSize, dotSpace * 0.5);
    }).bind(this), 200);
  }
};

module.exports = DotRevealText;