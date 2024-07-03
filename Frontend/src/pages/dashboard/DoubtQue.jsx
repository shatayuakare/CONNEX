
const DoubtQue = () => {

    const question = [
        {
            "question": "Question number 1",
            "comment": [
                "Comment 1",
                "Comment 2"
            ],
            "like": 2
        },
        {
            "question": "Question number 2",
            "comment": [
                "Comment 1",
                "Comment 2"
            ],
            "like": 2
        },
        {
            "question": "Question number 3",
            "comment": [
                "Comment 1",
                "Comment 2"
            ],
            "like": 2
        }
    ]

    return (
        <div className="bg-white rounded-2xl p-4 min-h-fit">
            <h5 className="text-2xl font-bold border-b-2 pb-1 ">
                My Doubts
                <button className="float-end shadow text-lg text-primary" >
                    Add New
                </button>
            </h5>
            <ul className="pt-3">
                {
                    question.map((elem, idx) => {
                        return (
                            <li className="text-xl h-fit" key={idx}>
                                <div className="flex justify-between">
                                    <span className="w-11/12">
                                        {idx + 1}. {elem.question}
                                    </span>
                                    <span className="w-1/12 text-end">
                                        <div className="join join-vertical lg:join-horizontal text-2xl gap-5">
                                            <div className="dropdown dropdown-hover">
                                                <div tabIndex={0} role="button" className="btn btn-sm m-1 text-xl bg-transparent text-gray-900 hover:bg-gray-100">
                                                    <i className='bx bxs-down-arrow'></i>
                                                </div>
                                                <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-fit p-2 shadow bg-white">
                                                    <li>
                                                        <button className="btn btn-ghost btn-circle">
                                                            <div className="indicator">
                                                                <i className='bx bxs-heart text-2xl text-red-700'></i>

                                                                <span className="badge badge-xs badge-primary indicator-item p-2 px-1 text-white">
                                                                    2
                                                                </span>
                                                            </div>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button className="join-item text-blue-500">
                                                            <i className='bx bxs-pencil' ></i>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button className="join-item text-green-500">
                                                            <i className='bx bxs-message-dots'></i>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button className="join-item text-red-500">
                                                            <i className='bx bxs-trash-alt'></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DoubtQue