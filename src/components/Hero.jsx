import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap items-center justify-center">
            <div>
                <motion.div className="flex flex-col items-center lg:items-start mt-10" initial="hidden" animate="visible" variants={containerVariants}>
                    <motion.h2 variants={childVariants} className="pb-2 text-4xl tracking-tighter lg:text-8xl">Daniel Saravia</motion.h2>
                    <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Software Engineer || Python - Django || React - Node.js </motion.span>
                    <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{HERO_CONTENT}</motion.p>
                    <motion.a variants={childVariants} href="https://github.com/iodaniels/portfolio/blob/master/public/AlexiSaravia-SoftwareEngineer-CV.pdf" target="_blank" rel="noopener noreferrer" download className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">Download Resume</motion.a>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero