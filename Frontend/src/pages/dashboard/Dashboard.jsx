import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const menu = [
    {
        "icon": "bx bxs-dashboard",
        "path": "",
        "name": "My Dashboard"
    },
    {
        "icon": "bx bxs-skull",
        "path": "doubt",
        "name": "Doubt Question"
    },
    {
        "icon": "bx bxs-user-rectangle",
        "path": "account",
        "name": "Account"
    },
    {
        "icon": "bx bxs-cog",
        "path": "setting",
        "name": "Setting"
    }
];


const Dashboard = () => {
    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);


    return (
        <section className="pt-16" id="dashboard">

            <div className="flex md:flex-row sticky top-0 left-0 sm:h-fit sm:flex-col">
                <div className="sm:w-100 md:w-1/4 md:p-6 pb-2" >
                    <div className="text-center uppercase">
                        <img className="w-48 h-48 mx-auto border-2 border-double border-black rounded-full"
                            src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="" />

                        <h4 className="text-2xl font-bold py-2">
                            {authUser.name}
                        </h4>
                    </div>

                    <ul className="menu font-bold text-lg mt-2 text-gray-600">
                        {

                            menu.map((elem, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={elem.path}>
                                            <i className={`${elem.icon} text-xl`}></i>
                                            {elem.name}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="sm:w-full md:w-3/4 md:pe-6 p-4">
                    <div className="p-4 bg-white">
                        <div className="text-2xl font-bold">
                            {authUser.name}
                        </div>
                        <div>
                            {authUser.username} - {authUser.email}
                        </div>
                    </div>

                    <div className="bg-[url('https://t3.ftcdn.net/jpg/03/24/13/18/360_F_324131827_oo4WRejOZSG4wgAttOOns3TfLXWfw81a.jpg')] bg-cover bg-center md:p-8 sm:p-4 rounded-3xl w-full innerdashboard" >

                        <Outlet />

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Dashboard