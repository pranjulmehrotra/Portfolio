/* eslint-disable */
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from "../constants/constants.js";
import { fadeIn,textVariant } from '../utils/motion';
//motion properties are already defined.
import { SectionWrapper } from '../hoc/index';
import { Tilt } from 'react-tilt';

const ServicesCard = ({ title, index, icon }) => {

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      
        className='w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
          className='bg-tertiary rounded-[10px] py-5 px-12 min-h-[280px] flex items-center justify-evenly flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <motion.div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h1 className={`${styles.sectionHeadText}`}>Overview.</h1>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}

        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
       assionate about problem-solving and innovation, I am a dedicated Full Stack Developer committed to crafting seamless digital experiences. Currently, I work as a Junior Full Stack Developer at Dock Developers, where I thrive on tackling challenging projects that push technological boundaries.
       With expertise in front-end and back-end development, I specialize in building dynamic, high-performance applications. My core tech stack includes React, Node.js, Express, MongoDB, and MySQL, along with strong skills in authentication, cloud services, and API development.
       I believe in continuous learning and collaboration, ensuring that every project I work on is user-centric, scalable, and built using industry best practices. Whether it's developing AI-powered chatbots, social media platforms, or e-commerce solutions, I take pride in delivering products that drive engagement and efficiency.
       Feel free to connect with me on LinkedIn or explore my projects on GitHub. Let's build something amazing together! 🚀
       
       
       <div>
       📧 mehrotra2002pranjul@gmail.com | 📞 9129184777 | 📍 Lucknow, India
       </div>

      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServicesCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </motion.div>
  )
}


export default SectionWrapper(About, "about");