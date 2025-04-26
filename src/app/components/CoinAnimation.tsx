'use client';
import React, { useState } from 'react'

import spritesheet from '../../../public/spritesheet.png';

const CoinAnimation = () => {
  const [coinResult, setCoinResult] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    setIsAnimating(true);
    setTimeout(() => { 
      setIsAnimating(false);
      setCoinResult(result);
    }, 1000);
  };
  return (
    <div className='flex flex-col items-center justify-between h-screen'>
      <div className={`w-36 h-48 bg-no-repeat bg-[46%] ${isAnimating ? 'animate-coin-flip' : null}`} style={{backgroundImage: `url(${spritesheet.src})`, backgroundSize: '1000% 100%',}}></div>
      <div className="flex flex-col justify-end items-center w-full h-fit gap-20">
          {isAnimating ? (<h2 className="text-4xl">Coin is flipping</h2>) : !isAnimating && coinResult ? (<h2 className="text-4xl">Coin landed on: {coinResult}</h2>) : null}
          <button className="px-14 py-2 rounded-full bg-green-700 text-2xl cursor-pointer w-fit" onClick={() => flipCoin()}>Flip the coin</button>
      </div>
    </div>
  );
};

export default CoinAnimation;