// Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar"

function Layout() {
  return (
    <>
      <Navbar />          {/* Always visible */}
      <main className="min-h-screen">
        <Outlet />        {/* 👈 Page content changes here */}
      </main>
    </>
  );
}

export default Layout;
