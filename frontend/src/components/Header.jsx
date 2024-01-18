import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 sm:text-xl">
      <Link to="/">
        <span
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
         px-2 rounded-lg"
        >
          Chaitu's
        </span>
        Blog
      </Link>
      <TextInput
        className="hidden lg:inline"
        placeholder="Search..."
        rightIcon={IoSearchOutline}
      />
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <IoSearchOutline />
      </Button>
      <div className="flex md:order-2 gap-2">
        <Button className="h-10 w-12" color="gray" pill size={12}>
          <IoIosMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue" rounded outline>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
