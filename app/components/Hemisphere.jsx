const React = require('react');
const { connect } = require('react-redux');
const { FelaComponent } = require('react-fela');

const HemisphereGIFs = {
  NORTHERN: "https://cdn.glitch.com/45380538-d456-4293-b98f-ae0843d6beb4%2Fhemisphere-northern.gif?1557081359893",
  SOUTHERN: "https://cdn.glitch.com/45380538-d456-4293-b98f-ae0843d6beb4%2Fhemisphere-southern.gif?1557081359508",
};

const DEFAULT_STYLE = props => {
  return {
    backgroundImage: `url(${props.northern ? HemisphereGIFs.NORTHERN : HemisphereGIFs.SOUTHERN})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: `${props.height}px`,
    width: `${props.width}px`
  }
};

const Hemisphere = props => {
  return (
    <FelaComponent height={props.height} width={props.width} northern={props.northern} style={DEFAULT_STYLE} />
  );
};

module.exports = connect()(Hemisphere);