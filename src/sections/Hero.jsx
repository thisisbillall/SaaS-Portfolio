import { Leva } from 'leva';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import Tech from './Tech.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const titles =
  [
    "Frontend",
    "Backend",
    "Full Stack",
    "Startups",
    "Web 3",
    "Blockchain",
    "SaaS",
    "Solopreneur",
    "Open-Source"
  ];
  const [currentTitle, setCurrentTitle] = useState(0);
  const gradients = [
    "text-gradient-blue", 
    "text-gradient-pink",
    "text-gradient-blue", 
    "text-gradient-pink",
    "text-gradient-blue", 
    "text-gradient-pink",
    "text-gradient-blue", 
    "text-gradient-pink",
    "text-gradient-blue", 
  ]; 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, [titles.length]);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="flex justify-start sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
        let's speak about
        </p>
        <p
        className={`text-xl hero_tag transition-opacity duration-1000 ease-in-out ${gradients[currentTitle]}`}
        key={currentTitle} 
      >
        <span className='text-9xl'>
        {titles[currentTitle]}.
        </span>
      </p>   
      
      </div>
      <div className='flex justify-center'>
        <Tech/>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
