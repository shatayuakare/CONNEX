import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";


const Loading = ({ show }) => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        // setTimeout(() => {
        //   setLoading(false);

        // }, 3000);
    }, [])

    return show && (
        <section className='h-dvw w-dvh absoluten top-0 left-0 flex items-center justify-center bg-transparent'>
            <HashLoader
                size={50}
                loading={loading}
            />
        </section>
    )
}

export default Loading