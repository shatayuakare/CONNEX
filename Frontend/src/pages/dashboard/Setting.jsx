import { useState } from "react"
import { useAuth } from "../../context/AuthProvider";


const Setting = () => {
    const [current, setCurrent] = useState();
    const [New, setNew] = useState();
    const [conform, setConform] = useState();

    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);

    return (
        <div className="w-1/2 bg-white p-3 px-6 rounded-2xl mx-auto">
            <form action="" className="">
                <h4 className="text-2xl text-center font-bold">
                    Change Password
                </h4>

                <label htmlFor="email">Email address</label>
                <input type="email" name="email" id="email"
                    placeholder="Email address"
                    value={authUser.email}
                    disabled={true}
                />

                <label htmlFor="current">Current Password</label>
                <input type="text" name="current" id="current"
                    placeholder="Current password"
                    value={current}
                    onChange={(e) => setCurrent(e.target.value)}
                />

                <label htmlFor="new">New Password</label>
                <input type="text" name="new" id="new"
                    placeholder="New password"
                    value={New}
                    onChange={(e) => setNew(e.target.value)}
                />

                <label htmlFor="conform">Conform Password</label>
                <input type="text" name="conform" id="conform"
                    placeholder="Conform password"
                    value={conform}
                    onChange={(e) => setConform(e.target.value)}
                />

                <button className="btn btn-primary mx-auto mt-6">
                    Save Change
                </button>
            </form>
        </div>
    )
}

export default Setting