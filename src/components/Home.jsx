import React, { useState, useContext } from 'react';
import { useEffect } from 'react';

import { FaRobot, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { userChoiceContext } from '../App';

export const Home = () => {
    const {setUserChoice, userChoice } = useContext(userChoiceContext);
    const [clickedUser, setClickedUser] = useState(false);
    const [clickedRobot, setClickedRobot] = useState(false);

    const handleClickRobot = () => {
        setUserChoice(true); 
        setClickedRobot(prevClicked => !prevClicked);
    };

    const handleClickUser = () => {
        setUserChoice(false);
        setClickedUser(prevClicked => !prevClicked);
    };

    return (
        <div className='w-3/4 h-3/4 flex'>
            <div className='w-full h-full flex flex-col justify-between items-center text-[32px] text-white'>
                <div className='my-8 text-center'>
                    <h1 className='font-bold text-[48px] text-shadow'>
                        Welcome !
                    </h1>
                    <h2 className='py-8 text-[28px]'>
                        Do you want to play against the Almighty AI or a friend?
                    </h2>
                </div>
                <div className='w-full sm:w-1/2 flex flex-row justify-between sm:text-[128px] text-[82px]'>
                    <div className='flex items-center justify-center'>
                    <FaRobot 
                            onClick={handleClickRobot} 
                            className={`${clickedRobot ? 'text-[#324457]' : 'text-[#8EC5FC]'} opacity-20 text-[#8EC5FC] absolute cursor-pointer hover:text-[#324457]`}
                        />
                    <FaRobot className=''/>
                    </div>
                    <div className='flex items-center justify-center'>
                        <FaUser 
                            onClick={handleClickUser} 
                            className={`${clickedUser ? 'text-[#324457]' : 'text-[#8EC5FC]'} opacity-20 text-[#8EC5FC] absolute cursor-pointer hover:text-[#324457]`}
                        />
                        <FaUser className=''/>
                    </div>
                </div>
                <Link to="/board">
                    <button className='bg-[#8EC5FC] rounded-lg px-7 py-4 shadow-lg hover:shadow-inner'>Start Game</button>
                </Link>
            </div>
        </div>
  )
}
