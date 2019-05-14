const React = require('react');

const Colors = require('../../lib/styles/Colors');
const Box = require('./Box');
const LoginForm = require('./LoginForm');

const Login = props => {
  return (
    <Box color={Colors.PRIMARY} height={props.height} width={props.width}>
      <LoginForm changeEmail={props.changeEmail}
        email={props.email}
        submitEmail={props.submitEmail} />
    </Box>
  );
}

module.exports = Login;