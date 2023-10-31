import { NavLink } from 'react-router-dom';
import React from 'react';

export default function AuthNav() {
  return (
    <div>
      <NavLink className="Links" >
        Registration
      </NavLink>
      <NavLink className="Links">
        Login
      </NavLink>
    </div>
  );
}
