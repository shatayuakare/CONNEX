import { Link } from "react-router-dom"

const Construct = () => {
    return (
        <section className="flex items-center justify-center" id="construct">
            <div className="md:w-3/5 text-center p-4">

                <img className="mx-auto sm:my-3 sm:w-full md:h-96 rounded-2xl" src="https://www.pngkey.com/png/detail/441-4412134_page-under-construction-under-construction-sign-png.png" alt="" loading="lazy" />

                <p className="md:w-1/2 mx-auto my-3">
                    <span className="underline font-semibold">
                        {window.location.href}
                    </span><br />
                    The page your looking for might have been removed or under construction.
                </p>

                <Link to={'/'} className="btn w-fit px-9 bg-violet-700 text-white hover:bg-violet-900 duration-300  mx-auto">
                    Go to Home Page
                </Link>
            </div>
        </section>
    )
}

export default Construct