const React = require('react');
const { FelaComponent } = require('react-fela');

const AccessGranted = require('./AccessGranted');
const Background = require('./Background');
const Colors = require('../../lib/styles/Colors');
const Globe = require('./Globe');
const Hemisphere = require('./Hemisphere');
const Login = require('./Login');
const EventWatcher = require('./EventWatcher');
const Phases = require('../phases');
const Presenter = require('./Presenter');
const Standby = require('./Standby');
const StyledDiv = require('./StyledDiv');

const RootComponent = props => {
  return (
    <Background minHeight={'600px'} minWidth={'800px'} position={'relative'}>
      <EventWatcher eventType={"click"}
        enabled={props.phase == Phases.STANDBY}
        handler={props.transitionToLogin} />
      <Globe height={'auto'} rotate={props.phase == Phases.STANDBY} width={'auto'} />
      <StyledDiv alignItems={'center'}
        backgroundColor={Colors.BLACK}
        display={'flex'}
        flexDirection={'column'}
        height={'160px'} position={'absolute'} 
        justifyContent={'center'}
        width={'100vw'} 
        overflow={'hidden'}>
        <Presenter visible={props.phase == Phases.LOGIN}>
          <Login changeEmail={props.changeEmail}
            email={props.email}
            submitEmail={props.submitEmail} 
            height={'150px'} 
            width={'600px'} />
        </Presenter>
        <Presenter visible={props.phase == Phases.STANDBY}>
          <Standby height={'150px'} text={'DUDD'} width={'600px'} />
        </Presenter>
        <Presenter visible={props.phase == Phases.ACCESS_GRANTED}>
          <AccessGranted height={'150px'}
            transitionToStandby={props.transitionToStandby}
            width={'700px'} />
        </Presenter>
      </StyledDiv>
    </Background>
  );
};

module.exports = RootComponent;