"use client"
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from "react";

// Images
import maximVerheul from '../imgs/homepage/mv_logo.png'
import background from '../imgs/background_1.png'
import sideBg from '../imgs/homepage/side_left.png'

// Buttons
import meButton from '../imgs/homepage/me.png'
import workButton from '../imgs/homepage/work.png'
import contactButton from '../imgs/homepage/contact.png'

// Spinning PNGs
import spinningPng1 from '../imgs/homepage/char3_col.png';
import spinningPng2 from '../imgs/homepage/char4_col.png';
import spinningPng3 from '../imgs/homepage/char5_col.png';
const spinningPngs = [spinningPng1, spinningPng2, spinningPng3];

// Background PNGs
import char1 from '../imgs/homepage/char1_col.png';
import char2 from '../imgs/homepage/char2_col.png';
import char3 from '../imgs/homepage/char3_col.png';
import char4 from '../imgs/homepage/char4_col.png';
import char5 from '../imgs/homepage/char5_col.png';
const backgroundPngs = [char1, char2, char3, char4, char5];

// Interfaces
interface Spin {
  id: number;
  png: StaticImageData;
}

interface BackgroundCharacter {
  id: number;
  png: StaticImageData;
  x: number;
  y: number;
}

export default function Home() {
  // Define states
  const [spins, setSpins] = useState<Spin[]>([]);
  const [backgroundChars, setBackgroundChars] = useState<BackgroundCharacter[]>([]);

  // Handle click of the Maxim Verheul image
  const handleClick = () => {
    const newSpin: Spin = {
      id: Date.now(),
      png: spinningPngs[Math.floor(Math.random() * spinningPngs.length)],
    };
  
    setSpins((spins: Spin[]) => [...spins, newSpin]);
  
    setTimeout(() => {
      setSpins((spins: Spin[]) => spins.filter((spin: Spin) => spin.id !== newSpin.id));
    }, 2000);
  };

  // Generate 20 random characters
  useEffect(() => {
    const chars: BackgroundCharacter[] = [];
    
    const sections = 10; // divide the y-axis into 5 sections
    const sectionHeight = 55 / sections; // height of each section, between 20% and 70%
  
    for (let i = 0; i < 4; i++) { // Generate 10 random characters
      const section = Math.floor(Math.random() * sections); // randomly choose a section for the y-coordinate
  
      const char: BackgroundCharacter = {
        id: i,
        png: backgroundPngs[Math.floor(Math.random() * backgroundPngs.length)],
        x: 9 + (i % 5) * 19, // distribute horizontally with a gap
        y: 35 + section * sectionHeight + Math.random() * sectionHeight, // randomly distribute within a section
      };
      chars.push(char);
    }
  
    setBackgroundChars(chars);
  }, []);  

  // Render
  return (
    <div style={{backgroundImage:`url(${background.src})`, backgroundRepeat: 'repeat', backgroundSize:'1000px 1000px', backgroundAttachment: 'local'}}>
      <main className='bg-black max-w-3xl mx-auto font-lexendDeca relative '>
        
        {/* Maxim Verheul */}
        <div className='flex flex-col  items-center justify-center py-2 relative' onClick={handleClick}>
          <div className='lg:hidden inline-flex absolute z-10 hover:cursor-pointer hover:scale-105 hover:-translate-y-1 transform transition duration-500 '>
            <Image
              src={maximVerheul}
              alt='Maxim Verheul'
              className='rounded-full mt-64'
              width={320}
            />
          </div>
          <div className='hidden lg:inline-flex absolute z-10 hover:cursor-pointer hover:scale-105 hover:-translate-y-1 transform transition duration-500 '>
            <Image
              src={maximVerheul}
              alt='Maxim Verheul'
              className='rounded-full mt-96'
              width={600}
            />
          </div>

          {/* Spinning PNGs */}
          {spins.map((spin) => {
            const randX = (Math.random() - 0.5) * 2000;
            const randY = (Math.random() - 0.5) * 2000;
            return (
              <div
                key={spin.id}
                className={`absolute animate-spin-out mt-20 ml-40 lg:ml-96`}
                style={{ '--random-x': `${randX}px`, '--random-y': `${randY}px` } as React.CSSProperties}
              >
                <Image src={spin.png} alt={`Spinning PNG ${spin.id}`} />
              </div>
            );
          })}
        </div>

        {/* Left Side background */}
        <div className="transform absolute bottom-0 left-2 w-10 h-full z-10"
            style={{ 
                backgroundImage: `url(${sideBg.src})`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'bottom',
            }}
        />

        {/* Right Side background */}
        <div className="transform absolute bottom-0 right-2 w-10 h-full z-10"
            style={{ 
                backgroundImage: `url(${sideBg.src})`,
                backgroundRepeat: 'repeat',
                backgroundPosition: 'bottom',
            }}
        />

        {/* Background characters */}
        {backgroundChars.map((char) => {
            return (
              <div
                key={char.id}
                style={{
                  position: 'absolute',
                  left: `${char.x}%`,
                  top: `${char.y}%`,
                }}
              >
                <Image src={char.png} alt={`Background character ${char.id}`} width={90}/>
              </div>
            );
          })}


        {/* Buttons, use min-h-screen*/}
        <div className='flex flex-col items-center justify-center min-h-screen'>
          
          {/* Work */}
          <div className='lg:hidden inline-flex hover:cursor-pointer hover:scale-110 hover:-rotate-12 transform transition mt-24 duration-500 ml-20'>
            <Link href='/work'>
              <Image src={workButton} alt='Work' width={250} />
            </Link>
          </div>
          <div className='hidden lg:inline-flex hover:cursor-pointer hover:scale-110 hover:-rotate-12 transform transition mt-80 duration-500 ml-56'>
            <Link href='/work'>
              <Image src={workButton} alt='Work' width={350} />
            </Link>
          </div>

          {/* Me */}
          <div className='lg:hidden inline-flex hover:cursor-pointer hover:scale-110 hover:rotate-12 transform transition duration-500 -ml-40'>
            <Link href='/me'>
              <Image src={meButton} alt='Me' width={150} />
            </Link>
          </div>
          <div className='hidden lg:inline-flex hover:cursor-pointer hover:scale-110 hover:rotate-12 -mt-12 transform transition duration-500 -ml-96'>
            <Link href='/me'>
              <Image src={meButton} alt='Me' width={250} />
            </Link>
          </div>

          {/* Contact */}
          <div className='lg:hidden inline-flex hover:cursor-pointer hover:scale-110 hover:rotate-12 transform transition duration-500 ml-16'>
            <Link href='/contact'>
              <Image src={contactButton} alt='Contact' width={250} />
            </Link>
          </div>
          <div className='hidden lg:inline-flex hover:cursor-pointer hover:scale-110 hover:rotate-12 -mt-20 transform transition duration-500 ml-56'>
            <Link href='/contact'>
              <Image src={contactButton} alt='Contact' width={350} />
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
