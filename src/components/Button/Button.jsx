import PropTypes from 'prop-types';
import React from 'react';


export const Button = (props) => {
  const {
    children,
    className,
    disabled,
    onClick,
    testCy,
    testId,
    text,
    type,
  } = props;

  return (
    <button
      data-cy={testCy}
      data-testid={testId}
      disabled={disabled}
      className={className}
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
      {text}
    </button>
  );
};


Button.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  onClick: undefined,
  testCy: undefined,
  testId: undefined,
  text: undefined,
  type: 'button',
};


Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  testCy: PropTypes.string,
  testId: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
