import PropTypes from 'prop-types';
import React from 'react';
import 'styles/components/buttons.scss';


/**
 * Button component for clicking
 */
export const Button = (props) => {
  const {
    children,
    className,
    disabled,
    label,
    onClick,
    testCy,
    testId,
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
      {children || label}
    </button>
  );
};
 

Button.defaultProps = {
  children: undefined,
  className: undefined,
  disabled: false,
  label: undefined,
  onClick: undefined,
  testCy: undefined,
  testId: undefined,
  type: 'button',
};


Button.propTypes = {
  /**
   * Content (overrides label)
   */
  children: PropTypes.node,
  /**
   * Style classes
   */
  className: PropTypes.string,
  /**
   * Disable button
   */
  disabled: PropTypes.bool,
  /**
   * Text label (if no children)
   */
  label: PropTypes.string,
  /**
   * On click handler function
   */
  onClick: PropTypes.func,
  /**
   * Cypress test id (data-cy)
   */
  testCy: PropTypes.string,
  /**
   * Jest test id (data-testid)
   */
  testId: PropTypes.string,
  /**
   * Button type
   */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
};
