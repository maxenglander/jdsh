const React = require('react');

const StyledDiv = require('./StyledDiv');

class WipeOut extends React.Component {
  constructor(props) {
    super(props);
    this._onFinish = this._onFinish.bind(this);
  }
  
  render() {
    return (
      <StyledDiv backgroundColor={this.props.backgroundColor}
        height={this.props.height}
        onTransitionEnd={this._onFinish}
        position={this.props.position || 'absolute'}
        transform={`translateX(${this.props.enabled ? '-30%' : '100%'})`}
        transition={'transform 3s linear'}
        width={'100vw'}>
        <img src={'/asset/greendogmed.png'}
          style={{
            height: '150px',
            marginLeft: '-75px'
          }}/>
      </StyledDiv>
    );
  }
  
  _onFinish() {
    this.props.finish();
  }
}

module.exports = WipeOut;
