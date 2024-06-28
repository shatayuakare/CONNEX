import { Link } from "react-router-dom"


const Main = () => {
    return (
        <section className="bg-gradient-to-r from-blue-200 to-orange-100 p-0" id="home-main">
            <div className="md:grid md:grid-cols-2 gap-0 md:mx-16 mt-6">
                <div className="home-content content-center p-4 sm:order-first">
                    <h2 className="home-head font-extrabold text-gray-700">
                        Better <span className="text-blue-700 underline drop-shadow-md">Learning Future</span> Starts With Connex
                    </h2>
                    <p className="my-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo optio perferendis quam architecto excepturi facilis molestias natus? Earum,
                    </p>
                    <Link to={'course'} className="btn btn-main">
                        Explore Course
                        <i className='bx bx-right-arrow-alt text-2xl'></i>
                    </Link>
                </div>
                <div className="sm:shrink-0 hidden md:flex">
                    <img className="mx-auto p-16 w-full"
                        src="https://bestwpware.com/html/tf/penn/assets/images/all-img/home-image.png" alt="study" />
                </div>
            </div>
        </section>
    )
}

export default Main