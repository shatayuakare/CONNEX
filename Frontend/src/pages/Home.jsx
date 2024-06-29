import Career from "../components/about/Career"
import AboutDetail from "../components/about/AboutDetail"
import Feature from "../components/about/Feature"
import Main from "../components/home/Main"
import Subscribe from "../components/home/Subscribe"
import Testimonial from "../components/home/Testimonial"

const Home = () => {
    return (
        <main className="mx-auto bg-white">
            <Main />
            <AboutDetail />
            <section className="sm:mx-4 md:mx-12">
                <Career />
                <Feature />
            </section>
            <Subscribe />
            <Testimonial />
        </main>
    )
}

export default Home