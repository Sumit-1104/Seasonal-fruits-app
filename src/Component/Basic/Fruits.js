import React, { useState } from "react";
import "./Styles.css";
import Menu from "./MenuApi";
import Menucard from "./Menucard";
import Navbar from "./Navbar";
const unique = [
  ...new Set(
    Menu.map((curelem) => {
      return curelem.category;
    })
  ),
  "All",
];
console.log(unique);

const Fruits = () => {
  const [menudata, setmenudata] = useState(Menu);
  const [menulist, setmenulis] = useState(unique);
  console.log(menudata);
  const filteritem = (category) => {
    if (category === "All") {
      setmenudata(Menu);
      return;
    }
    const updatelist = Menu.filter((curelem) => {
      return curelem.category === category;
    });
    setmenudata(updatelist);
  };
  return (
    <>
      <Navbar filteritem={filteritem} menulist={menulist} />
      <Menucard menudata={menudata} />
    </>
  );
};

export default Fruits;