const path = require('path');

const React = require('react');
const { FelaComponent } = require('react-fela');
const StyledDiv = require('./StyledDiv');

const xterm = require('xterm');
const { fit } = require('xterm/lib/addons/fit/fit');

const Colors = require('../../lib/styles/Colors');

class Standby extends React.Component {
  constructor(props) {    
    super(props);
    this._terminalRef = React.createRef();
  }
  
  componentDidMount() {    
    this._terminal = new xterm.Terminal({
      cols: 80,
      disableStdin: true,
      fontFamily: '"Courier New", Monospace',
      fontSize: '20',
      rendererType: 'canvas',
      theme: {
        cursor: Colors.BLACK,
        foreground: Colors.PRIMARY
      }
    });
    
    this._terminal.open(this._terminalRef.current);
    this._terminal.on('focus', () => this._terminal.blur()); 
    this._updateText(this.props.text);
  }
  
  componentDidUpdate() {
    this._updateText(this.props.text);
  }
  
  render() {
    return (
     <StyledDiv 
        backgroundColor={Colors.BLACK}
        boxSizing={'border-box'}
        fontFamily={'"Courier New", Monospace'}
        height={this.props.height} 
        innerRef={this._terminalRef}
        marginLeft={'-25px'}
        minHeight={this.props.height}
        overflow={'hidden'}
        paddingBottom={'10px'}
        paddingLeft={'0px'}
        paddingRight={'0px'}
        paddingTop={'10px'}
        width={this.props.width}>
      </StyledDiv>
    );
  }
  
  _updateText(text) {
    const terminal = this._terminal;
    fetch(`/ascii/font?text=${text}`)
      .then(response => response.text())
      .then(function (data) {
        terminal.clear();
        terminal.writeln(data.replace(/\n/g, "\r\n"));
      });
  }
}

module.exports = Standby;
