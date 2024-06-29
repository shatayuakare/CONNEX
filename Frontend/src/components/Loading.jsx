import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";


const Loading = ({ show }) => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
    }, [])

    return show && (
        <dialog className="modal modal-bottom backdrop-blur sm:modal-middle">
            <div className="modal-box">
                <HashLoader
                    size={50}
                    loading={loading}
                />
            </div>
        </dialog>
    )
}

export default Loading