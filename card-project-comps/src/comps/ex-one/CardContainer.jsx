import React from "react";
import Abut from "./Abut";
import Footer from "./Footer";
import Header from "./Header";
import User from "./User";

export default function CardContainer() {
  return (
    <div className="container ">
      <User />
      <Header/>
      <Abut />
      <Footer />
    </div>
  );
}
