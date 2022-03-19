import React from 'react';
import fit from '../assets/fit.png';


function Home () {
    return (
        <div className='hp'>
            <div className='hp-1'> 
                <h1 className='gradient__text'>All In One Gym Tracking App</h1>
                <p className='gradient__text2'>Start your fitness journey <br></br><span className='and'>&</span><br></br> Track your progress on one single app.</p>
            </div>
            <div className='hp-2'>
                <img src={fit}/>
            </div>
        </div>
        
    );
};

export default Home;