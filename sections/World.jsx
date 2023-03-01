'use client';

import { motion } from 'framer-motion'
import { TypingText, TitleText } from '../components';
import styles from '../styles'
import { staggerContainer, fadeIn } from '../utils/motion'

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      
      <TypingText title="| People on the World" textStyles='text-center' />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='relative mt-[68px] flex w-full h-[550px]'
      >
        <img
          src='/map.png'
          alt='map'
          className='w-full h-full object-cover'
        />

        <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-01.png' alt='people' className='w-full h-full'/>
        </div>

        <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-02.png' alt='people' className='w-full h-full'/>
        </div>

        <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
          <img src='people-03.png' alt='people' className='w-full h-full'/>
        </div>

        <div className='absolute top-10 right-20 w-[230px] h-[170px] p-[6px] rounded-[30px] bg-[#5d6680]'>
          <img src='map-card.png' alt='people' className='w-full h-full rounded-[25px] relative'/>
          <h1 className='text-white font-semibold absolute bottom-5 left-10 w-full leading-3'>Hawkins Labs</h1>
        </div>
      </motion.div>

    </motion.div>
  </section>
);

export default World;
