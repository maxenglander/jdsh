const { createComponent } = require('react-fela');

const Colors = require('../../lib/styles/Colors');

const StyledForm = createComponent(props => {
  return props;
}, 'form', ['autoComplete']);

module.exports = StyledForm;