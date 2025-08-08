import React from 'react';
import PropTypes from 'prop-types';

/**
 * GreetingCard displays a heading and optional subtitle.
 *
 * Props:
 * - name (string): Name to greet (required).
 * - subtitle (string): Optional subtitle text.
 * - style (object): Optional custom styles for the card container.
 */
const GreetingCard = ({ name, subtitle, style }) => {
  // Default styles if none provided
  const defaultStyles = {
    border: '2px solid #4CAF50',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#FAFAFA',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    ...style,
  };

  return (
    <div style={defaultStyles}>
      <h1 style={{ color: '#4CAF50', margin: '0 0 8px' }}>
        Hello, {name}!
      </h1>
      {subtitle && (
        <p style={{ color: '#666', margin: 0 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

GreetingCard.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  style: PropTypes.object,
};

GreetingCard.defaultProps = {
  subtitle: '',
  style: {},
};

export default GreetingCard;
