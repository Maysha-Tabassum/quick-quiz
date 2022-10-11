import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Language from '../Language/Language';

const Topics = () => {
    const languages = useLoaderData().data;
    console.log(languages);
    return (
        <div>
           <Banner></Banner>
           <div className='flex justify-center items-center mx-auto'>
           <div className= "mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded">
                {
                    languages.map(language => <Language
                        key={language.id}
                        language={language}
                        ></Language> )                            
                }
            </div>
           </div>
        </div>
    );
};

export default Topics;