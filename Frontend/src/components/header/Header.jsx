import menu from "../../api/menu.json";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import ShareModel from "./shareModel";


const Header = () => {

    const [authUser, setAuthUser] = useAuth();
    const [sticky, setSticky] = useState(false);
    setAuthUser(authUser)

    let userName = null;
    try {
        userName = authUser.name.substring(0, authUser.name.indexOf(' '));
        // console.log(userName)
    } catch (error) {
        // console.log(error.message)
    }



    const logOut = () => {
        try {
            setAuthUser({
                ...authUser,
                User: null
            })
            localStorage.removeItem("User")
            toast.success("User Logout");
            window.location.reload();
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 100) {
                setSticky(true);
            } else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <>
            <header className={`text-black p-0 md:px-12 fixed bg-white duration-300 ease-in-out w-full ${sticky ? "shadow-xl" : ""} `}>
                <div className="navbar py-0" >
                    <div className="navbar-start text-center">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost text-black  p-2">
                                <i className='bx bx-menu-alt-left text-3xl' ></i>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-white">
                                {
                                    menu.map((elem, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={`${elem.path}`}>{elem.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <Link to={"/"} className="btn btn-sm btn-ghost px-0 text-violet-800 font-extrabold sm:ms-0d uppercase md:ms-3 text-3xl ">
                            {/* <img className="w-10" src="./logo.png" alt="" /> */}
                            Connex
                        </Link>
                    </div>


                    <div className="navbar-center hidden lg:flex">
                        <div className="input input-bordered flex items-center gap-2 bg-transparent w-100 shadow">
                            <input type="text" className="grow" placeholder="Search" />
                            <i className='bx bx-search-alt h-5 w-5 opacity-70' ></i>
                        </div>
                    </div>


                    <div className="navbar-end md:gap-6 lg:gap-8">
                        <div className="shrink-0 sm:hidden md:flex">
                            <button className="btn btn-sm btn-ghost hidden text-black text-lg font-normal py-0"
                                onClick={() => document.getElementById('shareModal').showModal()}>
                                <i className='bx bxs-share' ></i>
                                Share
                            </button>
                        </div>

                        {
                            authUser ? <div className="dropdown dropdown-end border-2 border-black rounded-full p-1 py-1">
                                <div tabIndex={0} role="button" className="bg-transparent text-black w-full h-full text-md rounded-full py-0 pe-3 flex justify-between uppercase items-center">
                                    <img className="w-6 h-6 me-2 ms-1"
                                        src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                        alt="user"
                                    />
                                    {userName}
                                    <i className='bx bxs-chevron-down text-lg py-0 ms-1' ></i>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-white text-gray-700 rounded-box z-[1] w-52 mt-5  p-2 shadow">
                                    <li>
                                        <Link to={'/dashboard'}>Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to={'/dashboard/doubt'}>My Doubt</Link>
                                    </li>
                                    <li>
                                        <Link to={'/dashboard/setting'}>Setting</Link>
                                    </li>
                                    <li className="text-center ">
                                        <Link to={'/'} className="text-center bg-violet-400 text-white font-bold"
                                            onClick={logOut}>
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                                :
                                <Link to={'/login'} className="btn btn-sm bg-violet-600 rounded-lg px-8 py-3 text-white hover:bg-violet-800 hover:skew-y-6">
                                    Log In
                                </Link>
                        }
                    </div>
                </div>
            </header>
            <ShareModel />
        </>
    )
}

export default Header