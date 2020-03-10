import React from 'react';
import PropTypes from 'prop-types';

export function TabHeader({ index, isActive, title, onSelect }) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? 'active' : ''}`}
        // id="home-tab"
        data-toggle="tab"
        href=""
        // href="#home"
        onClick={safeClick(onSelect, index)}
        role="tab"
        // aria-controls="home"
        aria-selected={isActive}
      >
        {title}
      </a>
    </li>
  );
}

TabHeader.propTypes = {
  index: PropTypes.number,
  isActive: PropTypes.bool,
  title: PropTypes.string,
  onSelect: PropTypes.func,
};

function safeClick(callback, index) {
  return (e) => {
    e.stopPropagation();
    e.preventDefault();
    callback(index);
  };
}
