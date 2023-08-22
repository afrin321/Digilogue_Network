import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <Header />
      <section className="main-section">
        <Outlet></Outlet>
      </section>
      
    </main>
  );
}

export default Layout;
