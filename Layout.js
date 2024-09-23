import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" />Home</li>
          <li><Link to="/pagina1" />Página 1</li>
          <li><Link to="/pagina2" />Página 2</li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;