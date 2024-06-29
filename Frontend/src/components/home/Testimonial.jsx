import ContentHeading from "../ContentHeading";
import testimonial from "../../api/testimonial.json";
// import { useState } from "react";

const Testimonial = () => {

    // const [translate, setTranslate] = useState(0);
    // -translate-x-${translate} 
    // setTranslate(translate)
    return (
        <div className="md:px-12 sm:px-4 pb-14 bg-gradient-to-r from-orange-100 to-blue-100">
            <ContentHeading title={"Testimonial"}>
                What Says <span className="underline">Our Students</span>
            </ContentHeading>


            <div className="mx-auto md:w-11/12 overflow-hidden rounded-3xl">

                <div className={`carousel carousel-center space-x-6 max-w-full  p-6 text-neutral-500`}>

                    {
                        testimonial.map((elem, idx) => {
                            return (
                                <div className="carousel-item card bg-white rounded-2xl overflow-hidden md:w-96 sm:w-80 shadow-lg" key={idx}>
                                    <div className="card-body p-6">
                                        <div className="rating text-lg text-orange-400 start">
                                            {
                                                Array.from({ length: 5 }, (_, i) => {

                                                    let number = i + 0.5;

                                                    return (
                                                        <span key={i}>
                                                            {
                                                                elem.rate >= i + 1 ? (
                                                                    <i className='bx bxs-star'></i>
                                                                ) : elem.rate >= number ? (
                                                                    <i className='bx bxs-star-half'></i>
                                                                )
                                                                    : (
                                                                        <i className='bx bx-star' ></i>
                                                                    )

                                                            }
                                                        </span>
                                                    )
                                                })
                                            }
                                        </div>

                                        {elem.message}
                                    </div>

                                    <div className={`card-title p-3 ps-5 text-base text-gray-700 ${elem.color}  gap-6`}>
                                        <img className="w-16 h-16 rounded-full" src={elem.img} alt={elem.name}
                                            loading="lazy" />

                                        <div className="font-normal">
                                            <h5 className="text-xl font-bold text-black">{elem.name}</h5>
                                            <div>
                                                - {elem.profession}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

        </div >
    )
}

export default Testimonial