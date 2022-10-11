import React from 'react';
import './Language.css';

const Language = ({ language }) => {

    const { logo, name, total } = language;
    return (
        <div className='flex flex-col items-center justify-center mx-auto'>

            {/* card */}
            <div className='rounded-xl shadow-lg'>
                <div className='p-3 flex flex-col  bg-slate-900 text-white'>
                    <div className='language'>
                        <img src={logo} alt="" />
                    </div>
                    <div >
                        <h3 className='text-2xl md:text-3xl font-medium mt-3'>{name}</h3>
                        <p className='text-lg mt-3'>Total question number: {total}</p>
                    </div>
                    <button className='bg-orange-500 py-2 rounded-lg font-semibold mt-4 hover:bg-orange-300 text-black focus:scale-95 transition-all duration-200 ease-out'>
                        <p>Quiz Start</p>
                    </button>


                </div>

            </div>
        </div>
    );
};

export default Language;