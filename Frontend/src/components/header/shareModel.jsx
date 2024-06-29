import toast from "react-hot-toast";
import socialMedia from "../../api/socialMedia.json"


const shareModel = () => {
    const CopyText = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Share link copied!");

    }
    return (
        <>
            <dialog id="shareModal" className="modal modal-bottom backdrop-blur sm:modal-middle">
                <div className="modal-box bg-white text-center">

                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">✕</button>
                    </form>
                    <h3 className="font-bold text-xl">
                        Share with your Friends
                    </h3>
                    <p className="py-4">
                        Copy this link and share it with your friends
                    </p>

                    <div className="join w-full border border-black">
                        <input className="input-bordered text-md join-item bg-transparent" placeholder="URL"
                            value={window.location.href}
                            disabled={true}
                        />
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    onClick={CopyText}
                                    className="btn join-item bg-transparent hover:bg-transparent text-xl text-black">
                                    <i className='bx bxs-copy-alt'></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <p className="py-4">
                        Share Via
                    </p>

                    <div className="flex justify-around w-7/12 mx-auto mb-2">
                        {
                            socialMedia.map((elem, idx) => {
                                return (
                                    <a className={`${elem.color} link p-2.5 py-1.5 border-2 ${elem.bordercolor}  rounded-full text-xl`} href={elem.url} key={idx}>
                                        <i className={elem.icon}></i>
                                    </a>
                                )
                            })
                        }
                    </div>

                </div>
                <form method="dialog" className="modal-backdrop bg-transparent">
                    <button className="btn bg-transparent hover:bg-transparent">
                    </button>
                </form>

            </dialog >
            {/* <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}
        </>
    )
}

export default shareModel