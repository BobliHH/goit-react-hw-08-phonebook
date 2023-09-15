import { NavLink } from 'react-router-dom';

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
