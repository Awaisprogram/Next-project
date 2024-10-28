import React from "react";
import Button from "./button";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav>
        <h1>Marketing</h1>
        <ul>
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/about'}>
            <li>About</li>
          </Link>
          <Link href={'/features'}>
            {" "}
            <li>Features</li>
          </Link>
          <Link href={'/contact'}>
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
        <div className="none">
          <Button click="Contact" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
