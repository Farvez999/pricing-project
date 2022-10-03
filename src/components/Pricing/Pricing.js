import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                '10 users included',
                '2 GB of storage',
                'Email support',
                'Help center access'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                '20 users included',
                '10 GB of storage',
                'Priority email support',
                'Help center access'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                '50 users included',
                '30 GB of storage',
                'Phone and email support',
                'Help center access'
            ]
        }

    ]
    return (
        <div>
            <h1 className='text-5xl text-white font-bold bg-green-400 p-6'>Best Deal of the Town</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOption.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;