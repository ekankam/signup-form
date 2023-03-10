import { motion } from 'framer-motion';
import Form from './components/Form';

export default function Home() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center lg:gap-[45px] gap-[64px] lg:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-white text-center lg:text-left md:w-[525px]">
        <h1 className="text-28 mb-4 lg:text-50 font-bold lg:mb-3">
          Learn to code by watching others
        </h1>
        <p className="text-16 font-medium">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{' '}
        </p>
      </div>
      <div>
        <div className="text-center py-[18px] px-[66px] bg-c-blue text-white flex items-center justify-center rounded-[10px] font-normal text-15 element-shadow lg:py-[17px] lg:px-28 mb-6">
          <p>
            <span className="font-bold mr-1">Try it free 7 days</span>then
            $20/mo. thereafter
          </p>
        </div>
        <Form />
      </div>
    </motion.section>
  );
}
