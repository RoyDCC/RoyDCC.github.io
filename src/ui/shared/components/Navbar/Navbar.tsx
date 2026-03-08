import type { FC } from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

export const Navbar: FC = () => {
  return (
    <>
      <section className="bg-glass bg-base-100 shadow-sm glass-border-b w-full fixed top-0 z-10">
        <div className="navbar text-desc max-w-7xl m-auto">
          <div className="navbar-start grow py-0">
            <div className="dropdown">
              <div role="button" className="btn btn-ghost lg:hidden">
                <img src="/icons/menu-icon.svg" alt="Menu" className="invert w-7 h-7" />
              </div>
              <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow bg-default rounded-lg">
                <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}>
                    Inicio
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="#" className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}>
                    Proyectos
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/resources"
                    className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}
                  >
                    Recursos
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}>
                    Contacto
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/" className="text-xl text-cian font-bold">
                RDC
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex pt-0">
            <ul className="menu menu-horizontal px-1 gap-5">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}>
                  Inicio
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="#" className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}>
                  Proyectos
                </NavLink>
              </li> */}
              <li>
                <NavLink to="/resources" className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}>
                  Recursos
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => (isActive ? "bg-active-blue " : "") + "rounded-xl text-base"}>
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
