import {  NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navLinkStyle = ({ isActive }) =>
    isActive ? "border-b-[3px] border-red-400 text-gray-950 py-1" : "";

  const navigate =  useNavigate()
  return (
    <div className="sticky top-0 z-50 border-b bg-white py-1 shadow-sm">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-3">
        <div>
          <img src="/logo.png" alt="logo" className="h-14 cursor-pointer" onClick={()=>navigate('/')} />
        </div>
        <div>
          <ul className="flex gap-10 text-gray-500">
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/offers" className={navLinkStyle}>Offers</NavLink>
            </li>
            <li>
              <NavLink to="/sign-in" className={navLinkStyle}>Sign In</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
