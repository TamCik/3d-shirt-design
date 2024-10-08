import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import Support from './Support';

import {
   headContainerAnimation,
   headContentAnimation,
   headTextAnimation,
   slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
        { snap.intro && (
             <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                  <img
                    src='./threejs.png'
                    alt='Logo'
                    className='w-8 h-8 object-contain'
                  />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                       <h1 className='head-text'>
                         Buat <br className='xl:block hidden' /> <em>Style</em>mu.
                       </h1>
                    </motion.div>
                    <motion.div
                    {...headContentAnimation}
                    className='flex flex-col gap-5'
                    >
                      <p className='max-w-md font-normal text-gray-600 text-base'>
                      Bikin kaos unik dan eksklusif kamu dengan platform kustomisasi 3D brand baru kami. <strong>
                      Bebaskan imajinasimu
                      </strong>{" "}
                      dan definisikan gaya terbaikmu.
                      </p>

                      <CustomButton
                        type='filled'
                        title='Mulai Meracik'
                        handleClick={() => state.intro = false}
                        customStyle='w-fit px-4 py-2.5 font-bold text-sm'
                      />

                      <Support />
                    </motion.div>
                </motion.div>
             </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home