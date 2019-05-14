const React = require('react');

class EventWatcher extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener(this.props.eventType, this._onClick);
  }
  
  componentWillUnmount() {
    document.removeEventListener(this.props.eventType, this._onClick);
  }
  
  render() {
    return false;
  }
  
  _onClick() {
    if(this.props.enabled) {
      this.props.handler();
    }
  }
}

module.exports = EventWatcher;