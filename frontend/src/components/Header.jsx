import { Button, Navbar, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
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
    </Navbar>
  );
};

export default Header;
