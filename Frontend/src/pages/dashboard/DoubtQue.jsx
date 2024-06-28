
const DoubtQue = () => {

    const question = [
        {
            "que": "Question number 1",
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
                <li className="text-xl font-bold h-fit">
                    <div className="flex justify-between">
                        <span className="w-9/12">
                            Question Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, eum!
                        </span>
                        <span className="w-3/12 text-end">
                            <div className="join join-vertical lg:join-horizontal text-2xl gap-5">

                                <button className="btn btn-ghost btn-circle">
                                    <div className="indicator">

                                        <i className='bx bxs-heart text-2xl text-red-700'></i>

                                        <span className="badge badge-xs badge-primary indicator-item p-2 px-1 text-white">
                                            2
                                        </span>
                                    </div>
                                </button>

                                <button className="join-item text-blue-500">
                                    <i className='bx bxs-pencil' ></i>
                                </button>

                                <button className="join-item text-green-500">
                                    <i className='bx bxs-message-dots'></i>
                                </button>

                                <button className="join-item text-red-500">
                                    <i className='bx bxs-trash-alt'></i>
                                </button>
                            </div>
                        </span>
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default DoubtQue