const React = require('react');

const Colors = require('../../lib/styles/Colors');
const LoginFormInput = require('./LoginFormInput');
const LoginFormLabel = require('./LoginFormLabel');
const StyledForm = require('./StyledForm');


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this._inputRef = React.createRef();
    this._onSubmit = this._onSubmit.bind(this);
    this._preventBlur = this._preventBlur.bind(this);
  }
  
  componentDidMount() {
    this._inputRef.current.focus();
    this._inputRef.current.addEventListener('blur', this._preventBlur);
  }
  
  componentWillUnmount() {
    this._inputRef.current.removeEventListener('blur', this._preventBlur);
  }
  
  render() {
    return (
      <StyledForm 
        alignItems={'flex-start'}
        autoComplete={'off'}
        boxSizing={'border-box'}
        color={Colors.PRIMARY}
        flexDirection={'column'}
        fontFamily={'Menlo, Consolas, "Lucida Console", Monospace'}
        onSubmit={this._onSubmit}>
        <LoginFormLabel htmlFor={'email'}>EMAIL</LoginFormLabel>
        <LoginFormInput
          backgroundColor={Colors.PRIMARY}
          color={Colors.BLACK}
          fontFamily={'Menlo, Consolas, "Lucida Console", Monospace'}
          fontSize={'24px'}
          height={'30px'}
          id={'email'} 
          onChange={this.props.changeEmail}
          onSubmit={this._onSubmit}
          ref={this._inputRef}
          type={'email'} 
          value={this.props.email} />
      </StyledForm>
    );
  }
  
  _onSubmit() {
    this.props.submitEmail(this.props.email);
  }
  
  _preventBlur(e) {
    e.preventDefault();
    this._inputRef.current.focus();
  }
};
  
module.exports = LoginForm;
