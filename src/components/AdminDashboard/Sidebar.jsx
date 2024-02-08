import React, { useEffect, useRef, useState } from 'react'
import { NavLink,useLocation } from 'react-router-dom';
import Logo from "../../assets/logo-icon.svg"
import SidebarLinkGroup from './SidebarLinkGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import "./adminDashboard.css";

const Sidebar = ({sidebarOpen,setSidebarOpen}) => {
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );  

  return (
    <aside
    ref={sidebar}
    className={`absolute md:static nav text-white left-0 top-0 z-20 w-full md:w-[200px] flex h-screen py-3 md:px-5 border-right w-72.5 flex-col overflow-y-hidden duration-300 ease-linear lg:translate-x-0 ${
      sidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
  >
    {/* <!-- SIDEBAR HEADER --> */}
    <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>

      <button
        ref={trigger}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        className="block lg:hidden"
      >
        <svg
          className="fill-current"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill=""
          />
        </svg>
      </button>
    </div>
    {/* <!-- SIDEBAR HEADER --> */}

    <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
      {/* <!-- Sidebar Menu --> */}
      <nav className="mt-5 py-4 lg:mt-2">
        {/* <!-- Menu Group --> */}
        <div>
          <h3 className="mb-4 ml-4 text-sm font-semibold">
            MENU
          </h3>
            <ul className="mb-6 flex flex-col gap-2">
                {/* products  */}
                <SidebarLinkGroup
                    activeCondition={
                        pathname === '/product' || pathname.includes('product')
                    }
                    >
                    {(handleClick, open) => {
                        return (
                        <React.Fragment>
                            <NavLink
                            to="#"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                (pathname === '/product' ||
                                pathname.includes('product')) &&
                                'bg-graydark dark:bg-meta-4'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                            >
                                <FontAwesomeIcon icon={faTableColumns} />
                                Posts
                                <FontAwesomeIcon icon={faAngleDown} className={`${open && 'rotate-180'}`} />
                            </NavLink>
                            {/* <!-- Dropdown Menu Start --> */}
                            <div
                                className={`translate transform overflow-hidden ${
                                    !open && 'hidden'
                                }`}
                            >
                                <ul className="mt-2 mb-5.5 flex flex-col gap-2.5 pl-5">
                                    <li>
                                        <NavLink
                                            to="/admin/dashboard/product"
                                            className={({ isActive }) =>
                                            'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                            (isActive && '!text-white')
                                            }
                                        >
                                            All Posts
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/admin/dashboard/product/add"
                                            className={({ isActive }) =>
                                            'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                            (isActive && '!text-white')
                                            }
                                        >
                                            New Post
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                        );
                    }}
                </SidebarLinkGroup>

                {/* catgory */}
                <SidebarLinkGroup
                    activeCondition={
                        pathname === '/category' || pathname.includes('category')
                    }
                    >
                    {(handleClick, open) => {
                        return (
                        <React.Fragment>
                            <NavLink
                            to="#"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                (pathname === '/category' ||
                                pathname.includes('category')) &&
                                'bg-graydark dark:bg-meta-4'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                            >
                                <FontAwesomeIcon icon={faTableColumns} />
                                Categories
                                <FontAwesomeIcon icon={faAngleDown} className={`${open && 'rotate-180'}`} />
                            </NavLink>
                            {/* <!-- Dropdown Menu Start --> */}
                            <div
                                className={`translate transform overflow-hidden ${
                                    !open && 'hidden'
                                }`}
                            >
                                <ul className="mt-2 mb-5.5 flex flex-col gap-2.5 pl-5">
                                    <li>
                                        <NavLink
                                            to="/admin/dashboard/category"
                                            className={({ isActive }) =>
                                            'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                            (isActive && '!text-white')
                                            }
                                        >
                                            All Categories
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/admin/dashboard/category/add"
                                            className={({ isActive }) =>
                                            'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                            (isActive && '!text-white')
                                            }
                                        >
                                            New Category
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                        );
                    }}
                </SidebarLinkGroup>

                {/* banner */}
                <SidebarLinkGroup
                    activeCondition={
                        pathname === '/banner' || pathname.includes('banner')
                    }
                    >
                    {(handleClick, open) => {
                        return (
                        <React.Fragment>
                            <NavLink
                            to="#"
                            className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                pathname.includes('banner') &&
                                'bg-graydark dark:bg-meta-4'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                            >
                                <FontAwesomeIcon icon={faTableColumns} />
                                Banners
                                <FontAwesomeIcon icon={faAngleDown} className={`${open && 'rotate-180'}`} />
                            </NavLink>
                            {/* <!-- Dropdown Menu Start --> */}
                            <div
                                className={`translate transform overflow-hidden ${
                                    !open && 'hidden'
                                }`}
                            >
                                <ul className="mt-2 mb-5.5 flex flex-col gap-2.5 pl-5">
                                    <li>
                                        <NavLink
                                            to="/admin/dashboard/banner"
                                            className={({ isActive }) =>
                                            'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                            (isActive && '!text-white')
                                            }
                                        >
                                            All Banners
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/admin/dashboard/banner/add"
                                            className={({ isActive }) =>
                                            'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                            (isActive && '!text-white')
                                            }
                                        >
                                            New Banner
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                        );
                    }}
                </SidebarLinkGroup>
            </ul>
        </div>
      </nav>
      {/* <!-- Sidebar Menu --> */}
    </div>
  </aside>

  )
}

export default Sidebar
