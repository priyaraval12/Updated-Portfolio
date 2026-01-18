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
       Hey, I'm Priyansi – started in tech roles, spent 3+ years in data analytics, now fully focused on Web3. I got into data because I liked finding patterns that actually explained things. Turned a 4-hour weekly report into 20 minutes with SQL and Power BI, built dashboards that caught problems before meetings happened. Now I work with blockchain data—on-chain metrics, user behavior, protocol performance. My technical background helps me understand how these systems actually work, which means I catch things others miss. I use SQL, Python, whatever gets the job done, but the real skill is knowing what questions matter and explaining it so non-technical teams can run with it. If you're building in Web3 and need someone who moves fast and digs deep, let's connect.
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
