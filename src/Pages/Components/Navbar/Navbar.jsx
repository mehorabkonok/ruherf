// import React from 'react';
// import ruherf_logo from '../../../assets/ruherf_logo.jpg'
// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     const navItems =
//         <>
//             {/* <li><NavLink to='/'>Home</NavLink></li>
//             <li><NavLink to='/research'>Research</NavLink></li>
//             <li><NavLink to='/events'>Events</NavLink></li>
//             <li><NavLink to='/resource'>Resource</NavLink></li>
//             <li><NavLink to='/members'>Member</NavLink></li>
//             <li><NavLink to='/gallery'>Gallery</NavLink></li>
//             <li><NavLink to='/register'>Register</NavLink></li>
//             <li><NavLink to='/about'>About</NavLink></li>
//             <li><NavLink to='/contact_us'>Contact Us</NavLink></li> */}

//             <li><NavLink to='/' className="hover:text-sky-400">Home</NavLink></li>
//             <li><NavLink to='/research' className="hover:text-sky-400">Research</NavLink></li>
//             <li><NavLink to='/events' className="hover:text-sky-400">Events</NavLink></li>
//             <li><NavLink to='/resource' className="hover:text-sky-400">Resource</NavLink></li>
//             <li><NavLink to='/members' className="hover:text-sky-400">Member</NavLink></li>
//             <li><NavLink to='/gallery' className="hover:text-sky-400">Gallery</NavLink></li>
//             <li><NavLink to='/register' className="hover:text-sky-400">Register</NavLink></li>
//             <li><NavLink to='/about' className="hover:text-sky-400">About</NavLink></li>
//             <li><NavLink to='/contact_us' className="hover:text-sky-400">Contact Us</NavLink></li>
//         </>

//     return (
//         <>
//             <div className="navbar fixed top-0 left-0 w-full z-50 bg-gray-100 backdrop-blur-md">
//                 {/* className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white" */}
//                 {/* navbar fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white */}
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden border border-sky-500">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             {navItems}
//                         </ul>
//                     </div>
//                     <div className='lg:hidden flex w-full justify-end'>
//                         <a href="/">
//                             <div className='flex items-center justify-center h-10 w-auto border border-sky-500 rounded-md p-4'>RUHERF</div>
//                         </a>
//                     </div>
//                     <div >
//                         <a href="/">
//                             <img className='border border-sky-500 rounded-full h-12 w-12 hidden lg:block' src={ruherf_logo} alt="logo" />
//                         </a>
//                     </div>

//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navItems}
//                     </ul>
//                 </div>


//                 <div className="navbar-end">

//                     <a href="/login">
//                         <div className='border border-sky-500 rounded-md h-10 lg:h-12 w-24 flex items-center justify-center hover:bg-sky-500 hover:text-white'>Login</div>
//                     </a>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;


import React from 'react';
import ruherf_logo from '../../../assets/ruherf_logo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = (
        <>
            <li><NavLink to='/' className="hover:text-sky-400">Home</NavLink></li>
            <li><NavLink to='/research' className="hover:text-sky-400">Research</NavLink></li>
            <li><NavLink to='/events' className="hover:text-sky-400">Events</NavLink></li>
            <li><NavLink to='/resource' className="hover:text-sky-400">Resource</NavLink></li>
            <li><NavLink to='/members' className="hover:text-sky-400">Member</NavLink></li>
            <li><NavLink to='/gallery' className="hover:text-sky-400">Gallery</NavLink></li>
            <li><NavLink to='/register' className="hover:text-sky-400">Register</NavLink></li>
            <li><NavLink to='/about' className="hover:text-sky-400">About</NavLink></li>
            <li><NavLink to='/contact_us' className="hover:text-sky-400">Contact Us</NavLink></li>
        </>
    );

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/2 backdrop-blur-sm text-white">
            <div className="navbar container mx-auto px-4">
                {/* Navbar start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} className="btn btn-ghost lg:hidden border border-sky-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-black/70 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>

                    {/* Mobile logo */}
                    <div className='lg:hidden flex w-full justify-end'>
                        <a href="/">
                            <div className='flex items-center justify-center h-10 w-auto border border-sky-500 rounded-md p-4'>
                                RUHERF
                            </div>
                        </a>
                    </div>

                    {/* Desktop logo */}
                    <div className="hidden lg:block">
                        <a href="/">
                            <img className='border border-sky-500 rounded-full h-12 w-12' src={ruherf_logo} alt="logo" />
                        </a>
                    </div>
                </div>

                {/* Navbar center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navItems}</ul>
                </div>

                {/* Navbar end */}
                <div className="navbar-end">
                    <a href="/login">
                        <div className='border border-sky-500 rounded-md h-10 lg:h-12 w-24 flex items-center justify-center hover:bg-sky-500 hover:text-white'>
                            Login
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
