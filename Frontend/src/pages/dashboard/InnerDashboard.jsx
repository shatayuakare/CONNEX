import { useAuth } from "../../context/AuthProvider"
import { Link } from "react-router-dom";

const enrollCourse = [
    {
        "icon": "bx bxl-python",
        "name": "Python"
    },
    {
        "icon": "bx bxl-java",
        "name": "Java"
    },
    {
        "icon": "bx bxl-c-plus-plus",
        "name": "C++"
    }
];


const likeCourse = [
    {
        "icon": "bx bxl-javascript",
        "name": "Java Script"
    }
]




const InnerDashboard = () => {
    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 md:gap-6 sm:gap-4">
            <div className="row-span-2 rounded-2xl overflow-hidden">
                <div className="card bg-white shadow-xl">
                    <figure className="bg-blue-50 h-40 ">
                        <img className="h-24 w-24 mt-16 z-10"
                            src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body z-0">
                        <h2 className="card-title">
                            {authUser.name}
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, veniam.
                        </p>
                        <div className="card-actions justify-start">
                            <Link to={'account'} className="btn btn-primary">
                                Edit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-3 h-full pb-0">
                <h5 className="text-lg font-bold">
                    My Courses
                </h5>
                <div className="carousel carousel-center space-x-3 py-2 max-w-full gap-1">
                    {
                        enrollCourse.map((elem, idx) => {
                            return (
                                <div className="carousel-item  hover:bg-gray-200 p-2 card w-28 rounded-md text-center" key={idx}>
                                    <div className="card-body p-2 text-4xl">
                                        <i className={elem.icon}></i>
                                    </div>
                                    <div className="card-title mx-auto">
                                        {elem.name}
                                    </div>

                                    <Link to={'/construction'} className="btn btn-sm btn-normal">
                                        Continue
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-white rounded-2xl p-3 h-full">
                <h5 className="text-lg font-bold">
                    Like Course
                </h5>
                <div className="carousel carousel-center space-x-3 p-3 max-w-full gap-1">
                    {
                        likeCourse.map((elem, idx) => {
                            return (
                                <div className="carousel-item  hover:bg-gray-200 p-2 card w-28 rounded-md text-center" key={idx}>
                                    <div className="card-body p-2 text-4xl">
                                        <i className={elem.icon}></i>
                                    </div>
                                    <Link to={'/construction'} className="card-title mx-auto underline">
                                        {elem.name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InnerDashboard