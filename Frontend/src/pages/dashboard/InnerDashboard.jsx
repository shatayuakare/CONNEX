import { useAuth } from "../../context/AuthProvider"
import { Link } from "react-router-dom";

const InnerDashboard = () => {
    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);

    return (
        <div className="grid grid-cols-2 gap-8">
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
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <Link to={'account'} className="btn btn-primary">
                                Edit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-3">
                <h5 className="text-lg font-bold">
                    My Courses
                </h5>
                <div>
                    sdkfjh
                </div>
            </div>
            <div className="bg-white rounded-2xl p-3">
                <h5 className="text-lg font-bold">
                    Like Course
                </h5>
            </div>
        </div>
    )
}

export default InnerDashboard