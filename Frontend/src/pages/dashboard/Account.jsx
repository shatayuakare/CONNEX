import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import { useState } from "react";


const Account = () => {

    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);

    const [name, setName] = useState();
    const [username, setUsername] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => console.log(data);
    return (
        <div>
            <form action="" className="grid sm:grid-cols-1 md:grid-cols-2 sm:gap-4 md:gap-6" onSubmit={handleSubmit(onSubmit)}>

                <div className="sm:p-2 mdp-4 bg-white rounded-2xl">
                    <div className="card ">
                        <figure className="bg-blue-50 h-40 ">
                            <img className="h-24 w-24 mt-16 z-10"
                                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body z-0">

                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white rounded-2xl">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"
                            placeholder="Enter full name..."
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            {...register("name", {
                                required: "Name is required field"
                            })}
                        />
                        <div className="msg">
                            {errors.name && <span>{errors.name.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username"
                            placeholder="Enter username..."
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            {...register("username", {
                                required: "Username is required field"
                            })}
                        />
                        <div className="msg">
                            {errors.username && <span>{errors.username.message}</span>}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email"
                            placeholder="Enter Email address..."
                            id="email"
                            value={authUser.email}
                            {...register("email", {
                                required: "Email is required field"
                            })}
                            disabled={true}
                        />
                        <div className="msg">
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary mt-6 mx-auto">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Account