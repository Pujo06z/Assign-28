import React from "react";
import PropTypes from 'prop-types';

const StatCard = ({ label, value, unit = "", trend = "neutral" }) => {
  const trendColor = trend === 'up' ? 'green' : trend === 'down' ? 'red' : 'gray';
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      <h4>{label}</h4>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{value} {unit}</p>
      <span style={{ color: trendColor }}>Xu hướng: {trend}</span>
    </div>
  );
};

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
  trend: PropTypes.oneOf(['up', 'down', 'neutral'])
};
export default StatCard;