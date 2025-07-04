"use client";
import React from 'react'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useState } from "react";

const Qoutes = [
  { name: 'Sohaib', Qoute: 'Make a joke on yourself unless or until people will start judging you on that joke', bg_img: 'https://i.pinimg.com/736x/f3/2e/1d/f32e1d1153a41cf771f5dfc4fc4909fb.jpg' },
  { name: 'Dr. Seuss', Qoute: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",bg_img:'https://i.pinimg.com/736x/53/81/f1/5381f13d9e9a66e0dcb6f579f3c28fc7.jpg' },
  { name: 'Mae West', Qoute: "You only live once, but if you do it right, once is enough.",bg_img:'https://i.pinimg.com/736x/cd/9c/28/cd9c28e134a5f5e1e982805be91d3dab.jpg' },
  { name: 'Mahatma Gandhi', Qoute: "Be the change that you wish to see in the world.",bg_img:'https://i.pinimg.com/736x/d6/48/fb/d648fbcabc0f90535aa514894d2ff4e9.jpg' },
  { name: 'Robert Frost', Qoute: "In three words I can sum up everything I've learned about life: it goes on.",bg_img:'https://i.pinimg.com/736x/51/e8/6b/51e86b44700db652a08f7cf747c115e0.jpg' },
  { name: 'J.K. Rowling, Harry Potter and the Goblet of Fire', Qoute: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",bg_img:'https://i.pinimg.com/736x/84/e3/fa/84e3fa2774bc65c0c4c1d0b45bdad652.jpg' },
  { name: 'Mark Twain', Qoute: "If you tell the truth, you don't have to remember anything",bg_img:'https://i.pinimg.com/736x/bc/2f/a1/bc2fa1e0b6c4bf8c902464936f8233ab.jpg' }
];

function App() {
    const [selected, setselected] = useState(0);

  const handle =async () => {
    const randomIndex = Math.floor(Math.random() * Qoutes.length);
    setselected(randomIndex);
  };
    return (
        <div className='App-bg w-full h-auto bg-cover' style={{ background: `url('./Header_bg.jpg')` }}>

            <div className=' flex p-5 w-full h-auto justify-center items-center bg-blue-700'>

                <h1 className="flex items-center text-2xl md:text-5xl font-extrabold dark:text-white">Flowbite<span className="bg-blue-100 text-2xl md:text-5xl  text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2">PRO</span></h1>

            </div>
            <div className='flex flex-col md:flex-row md:items-center md:justify-center '>
                <div className='flex items-center justify-center'>
                    <button type="button" onClick={()=>{handle()}} className="transition duration-300 hover:scale-110 md:py-2 my-6  cursor-pointer rotate-180 md:px-2 text-white bg-gradient-to-br  to-blue-600 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><DoubleArrowIcon /></button></div>
                <div className='flex justify-center relative item-center  m-10 h-[38vh] w-[77vw] ' >

                    <div
                        className="flex text-lg p-3 md:text-lg rounded-lg justify-center items-center w-full h-full absolute"
                    >
                        <p className="max-w-lg italic text-xl md:text-3xl font-semibold leading-loose text-white">
                            {Qoutes[selected].Qoute}
                            <br />
                            <p className='flex  text-yellow-400 justify-end'>--{Qoutes[selected].name}</p>
                        </p>
                    </div>

                    <img src={Qoutes[selected].bg_img} className="w-full h-auto max-w-xl rounded-lg" alt="image description" />

                </div>
                <div className='flex items-center justify-center'>
                    <button type="button" onClick={()=>{handle()}} className="py-2 transition duration-300 hover:scale-110 px-2 text-white cursor-pointer bg-gradient-to-br  to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><DoubleArrowIcon /></button></div>

            </div>
        </div>
    )
}

export default App