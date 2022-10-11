import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='flex flex-col items-center justify-center  min-h-screen container mx-auto text-orange-500'>
                <h2 className='text-2xl md:text-4xl lg:text-6xl uppercase'>WELCOME TO</h2>
                <h2 className='text-3xl md:text-6xl lg:text-8xl font-bold uppercase mb-8'>The coding club</h2>
                <p className='text-2xl md:text-4xl lg:text-6xl text-white mb-16'>Let's Play!!</p>
                <p>Play Now,and level Up.</p>
            </div>
        </div>

    );
};

export default Banner;