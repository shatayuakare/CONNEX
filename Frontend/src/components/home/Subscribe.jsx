import { Link } from "react-router-dom"


const Subscribe = () => {
    return (
        <div className="sm:p-6 md:p-12 text-center flex justify-center bg-blue-100">
            <div className="sm-w-full md:w-8/12">
                <h5 className="text-black font-bold sm:text-3xl md:text-5xl">Subscripbe to our newsletter, We don't make any spam.</h5>
                <p className="py-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsa e maiores, dolor non, tempore molestias sequi?
                </p>
                <form className="sm-w-full md:w-10/12 mx-auto" action="">
                    <span className="input input-bordered border-4 py-6 p-4  rounded-full  pe-0 flex bg-white items-center gap-2 hover:border-violet-500 duration-200">
                        <input type="email" className="grow  " placeholder="Enter your email address" />
                        <Link to={"/register"} className="btn btn-ghost hover:bg-violet-500 text-black duration-300 rounded-full">
                            <i className='bx p-1 bxl-telegram text-3xl'></i>
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Subscribe