import { Link } from "react-router-dom"


const Main = () => {
    return (
        <section className="bg-gradient-to-r from-blue-200 to-orange-100 p-0" id="home-main">
            <div className="md:grid md:grid-cols-2 gap-0 md:mx-16 md:mt-6">
                <div className="home-content content-center p-4 sm:order-first sm:min-h-full">
                    <h2 className="home-head font-extrabold text-neutral-700">
                        Better <span className="text-violet-700 underline drop-shadow-md">Learning Future</span> Starts With Connex
                    </h2>
                    <p className="my-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo optio perferendis quam architecto excepturi facilis molestias natus? Earum,
                    </p>
                    <Link to={'/course'} className="btn btn-sm btn-main">
                        Explore Course
                        <i className='bx bx-right-arrow-alt text-2xl'></i>
                    </Link>
                </div>
                <div className="sm:shrink-0 hidden md:flex">
                    <img className="mx-auto md:p-16 w-full"
                        src="https://bestwpware.com/html/tf/penn/assets/images/all-img/home-image.png" alt="study" />
                </div>
            </div>
        </section>
    )
}

export default Main