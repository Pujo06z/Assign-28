import React from "react";
import StatCard from "./StatCard";
import PropTypes from "prop-types";

const StatsGrid = ({ stats }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
      {stats.map((stat, index) => (
        // Dùng spread props {...stat} ở đây
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

StatsGrid.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default StatsGrid;