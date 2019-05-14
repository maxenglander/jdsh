const React = require('react');

const Colors = require('../../lib/styles/Colors');
const DotRevealText = require('./DotRevealText');
const StyledDiv = require('./StyledDiv');
const WipeOut = require('./WipeOut');

class AccessGranted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wipeOut: false
    };
    this._beginWipeOut = this._beginWipeOut.bind(this);
    this._endWipeOut = this._endWipeOut.bind(this);
    this._video = React.createRef();
  }
  
  componentDidMount() {
    this._video.current.play();
  }
  
  render() {
    return (
      <StyledDiv display={'flex'}
        position={'relative'}>
        <StyledDiv
          alignItems={'center'}
          display={'flex'}
          flexDirection={'column'}
          height={this.props.height}
          justifyContent={'center'}
          innerRef={this._textRef}
          width={this.props.width}>
          <video onEnded={this._beginWipeOut} ref={this._video}>
            <source src="https://cdn.glitch.com/45380538-d456-4293-b98f-ae0843d6beb4%2Faccess-granted.webm?1557800325907" type="video/webm" />
          </video>
        </StyledDiv>
        <WipeOut backgroundColor={Colors.BLACK}
          enabled={this.state.wipeOut}
          finish={this._endWipeOut}
          height={this.props.height}
          width={this.props.width} />
      </StyledDiv>
    );
  }
  
  _beginWipeOut() {
    setTimeout((function() {
      this.setState({
        wipeOut: true
      });
    }).bind(this), 10);
  }
  
  _endWipeOut() {
    this.props.transitionToStandby();
  }
}

module.exports = AccessGranted;