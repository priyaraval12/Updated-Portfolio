import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionsWrapper } from '../HOC';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Greetings! I'm Priyanshi, a Web3 Frontend Developer with a year of experience in React JS and smart contract development. I'm pleased with my contributions to important open-source web projects. As a freelancer, I prioritise seamless cooperation and excellent client communication to ensure successful outcomes across a variety of projects. I genuinely think that by pooling our unique abilities and knowledge, we can create exceptional digital solutions. Let us go on this trip together.

      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services?.map((service, index) => (
          <ServiceCard key={service?.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionsWrapper(About, 'about');
