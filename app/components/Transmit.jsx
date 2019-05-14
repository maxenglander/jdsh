const path = require('path');

const React = require('react');
const { FelaComponent } = require('react-fela');

const BlinkingCursor = require('./BlinkingCursor');
const Box = require('./Box');
const Colors = require('../../lib/styles/Colors');
const StyledDiv = require('./StyledDiv');
const TransmitPhrases = require('./TransmitPhrases');

const DEFAULT_STYLE = props => {
  return {

  };
};

class Transmit extends React.Component {
  constructor(props) {
    super(props);
    this._animateText = this._animateText.bind(this);
    this._scrollRef = React.createRef();
    this._typingRef = React.createRef();
  }
  
  componentDidMount() {
    const index = Math.floor(Math.random()) * TransmitPhrases.length;
    const phrase = TransmitPhrases[index];
    this._animateText(phrase);
  }
  
  render() {
    return (
      <Box alignItems={'center'}
        color={Colors.PRIMARY} 
        display={'flex'}
        flexDirection={'column'}
        height={this.props.height}
        width={this.props.width}>
        <StyledDiv 
          alignItems={'center'}
          justifyContent={'flex-end'}
          color={Colors.PRIMARY}
          display={'flex'}
          flexDirection={'row'}
          fontFamily={"'Inconsolata', monospace"}
          fontSize={'48px'}
          height={'100%'}
          innerRef={this._scrollRef}
          overflow={'hidden'}
          width={'100%'}
          whiteSpace={'nowrap'}>
          <StyledDiv flex={1}
            innerRef={this._typingRef}
            textAlign={'right'} />
          <BlinkingCursor fillColor={Colors.PRIMARY} 
            height={'48px'}
            width={'48px'} />
        </StyledDiv>
      </Box>
    );
  }
  
  _animateText(phrase, index = 0) {
    if(index <= phrase.length + 1) {
      const text = phrase.substring(0, index);
      this._scrollRef.current.scrollLeft = this._scrollRef.current.scrollWidth;
      this._typingRef.current.innerHTML = text;
      setTimeout((function() {
        this._animateText(phrase, index + 1);
      }).bind(this), 75);
    } else {
      this.props.transitionToStandby();
    }
  }
}

module.exports = Transmit;