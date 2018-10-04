import React from 'react';

import './Navigation.scss';

const Navigation = ({ links }) => (
  <div className="Navigation">
    <ul>
      {links.map(link => (
        <li key={link.to}>
          <a href={link.to}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Navigation;
