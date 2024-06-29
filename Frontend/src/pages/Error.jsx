import { Link } from "react-router-dom"

const Error = () => {
    return (
        <section className="flex items-center justify-center" id="error">
            <div className="md:w-3/5 text-center">

                {/* <h5 className="md:text-[9rem] font-bold uppercase">Oops</h5> */}
                <img className="mx-auto h-68" src="https://static.kalibrr.com/kalibrr/kalibrr-404-image-03.png" alt="" />

                <div className="font-bold text-xl uppercase">
                    404 - Page not Found
                </div>
                <p className="w-1/2 mx-auto my-5">
                    The page your looking for might have been removed had its name changed or is temparary unavailabe.
                </p>

                <Link to={'./'} className="btn w-fit px-9 bg-violet-700 text-white mx-auto">
                    Go to Home Page
                </Link>
            </div>
        </section>
    )
}

export default Error