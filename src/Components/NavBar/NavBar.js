import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


function NavBar({ cartProducts }) {
  const { user, signOutUser } = useAuth();
  const menuItems = (
    <React.Fragment>
      <li>
        <Link className="hover:bg-white" to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="file: mt-4 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="badge badge-sm badge-error">
            {cartProducts?.length || 0}
          </span>
        </Link>
      </li>
      <li>
        <Link className="bg-transparent text-black" to="/product-list">
          Product List
        </Link>
      </li>
      <li>
        <Link className="bg-transparent text-black" to="/order-list">
          Order List
        </Link>
      </li>
      <li className="">
        <Link className="bg-transparent text-black" to="/add-product">
          Add Product
        </Link>
      </li>
      <li className="flex items-center">
        {!user?.email && (
          <Link className="bg-transparent text-black" to="/login">
            
            Sign In
          </Link>
        )}
        {user?.email && (
          <button className="bg-transparent  text-error" onClick={signOutUser}>
            Log out
          </button>
        )}
      </li>
      <li>
        {!user?.email && (
          <Link className="bg-transparent text-black" to="/signup">
            {" "}
            Sign Up
          </Link>
        )}
      </li>
    </React.Fragment>
  );

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2  bg-base-100 rounded-box w-52 items-center"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            E-Commerce Admin
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
      </div>
      <hr />
    </>
  );
}

export default NavBar;
