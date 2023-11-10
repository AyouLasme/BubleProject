

export default function Header() {
    return (
        <div
            className="w-full h-[5rem] fixed top-0 right-0 z-50 flex justify-center gap-4 items-center custom-backdrop">
            <span className="text-4xl my-5 text-blue-950 font-bold title">
                PDL - Bubble project
            </span>

            <div className="group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                <div
                    className="group-hover:inline-block text-sm font-semibold hidden float-left w-64 h-48 custom-backdrop p-4  rounded-md custom-backdrop"
                    style={{
                        position: 'fixed',
                        zIndex: 9999
                    }}
                    >
                        <span className='block mx-auto title text-lg text-center'>Contributeurs</span>
                        <ul className="mt-3 flex flex-col gap-1">
                            {
                                [
                                    'Ayou LASME', 'Alette DIEME', 'Mafourz BOUKARI', 'Nataniel OWAGOKE'
                                ].map((elt, index) =>
                                    (
                                        <li className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                            <span className='ml-3 w-full'>
                                                { elt }
                                            </span>
                                        </li>
                                    )
                                )
                            }

                        </ul>
                </div>

            </div>
        </div>
    )
}