import React from 'react'

function About() {
    return (
        <div>
            <div className=' flex p-5 w-full h-auto justify-center items-center bg-blue-700'>

                <h1 className="flex items-center text-2xl md:text-5xl font-extrabold dark:text-white">Flowbite<span className="bg-blue-100 text-2xl md:text-5xl  text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2">PRO</span></h1>

            </div>
            <div className='flex justify-center p-5'>
                <div>

                    <img src="https://i.pinimg.com/736x/d4/2f/06/d42f061809b72db048e13fb6588b586b.jpg" className="w-full h-auto max-w-xl rounded-lg" alt="image description"/>

                </div>
                <div>


                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default About