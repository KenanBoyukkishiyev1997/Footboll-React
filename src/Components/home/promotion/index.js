import React from 'react';
import PromationAnimatien from './Animation'
import Enroll from './Enroll'

const Promotion = () => {
    return (
        <div className='promotion_wrapper' style={{ background: '#fff' }}>
            <div className='container'>
                <PromationAnimatien />
                <Enroll />
            </div>
        </div>
    ); 
}

export default Promotion;