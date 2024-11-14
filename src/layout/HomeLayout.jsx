import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/LayoutComponents/LeftNavbar";
import RightNavbar from "../components/LayoutComponents/RightNavbar";
import CategoryNews from "../pages/CategoryNews";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header className="pt-4">
        <Header></Header>
        <section className="w-11/12 mx-auto my-4">
          <LatestNews></LatestNews>
        </section>
      </header>

      <nav className="w-11/12 mx-auto my-4">
        <Navbar></Navbar>
      </nav>

      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-3">
          <RightNavbar></RightNavbar>{" "}
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
