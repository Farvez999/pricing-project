import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-green-500 m-3 rounded p-3'>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-2xl text-gray-300'>/mon</span>
                </h3>
                <p className='text-3xl my-3'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-gray-600 w-full rounded-md py-2 mt-4 text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default PriceOption;