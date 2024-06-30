import { Link } from "react-router-dom"
import menu from "../api/menu.json"

const Footer = () => {
    return (
        <>
            <div className="footer p-10 bg-slate-900 text-base-content">
                <aside className="">
                    <Link to={"/"} className="btn btn-sm btn-ghost px-0 text-white font-extrabold sm:ms-0d uppercase md:ms-3 text-3xl ">
                        {/* <img className="w-10" src="./logo.png" alt="" /> */}
                        Connex
                    </Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>

                    {
                        menu.map((elem, idx) =>
                            <Link to={elem.path} key={idx} className="link link-hover">{elem.name}</Link>
                        )
                    }
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
            <div className="footer footer-center p-4 bg-slate-950 text-base-content">
                <aside>
                    <p>Copyright ©2024 - All right reserved by Smart Coder</p>
                </aside>
            </div>
        </>
    )
}

export default Footer