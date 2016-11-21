import React, { PropTypes } from 'react';

const Button = ({ action, actionLabel, barked }) => <button onClick={() => action(barked)}>{actionLabel}</button>;

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
};

export default Button;
