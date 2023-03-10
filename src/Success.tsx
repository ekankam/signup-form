import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Success() {
  const location = useLocation();

  return (
    <motion.section
      className="flex flex-col items-center justify-center lg:gap-[45px] gap-[64px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-[10px] text-c-dark-blue p-6 w-full lg:p-16 lg:w-3/4">
        <h1 className="text-2xl mb-4 font-bold lg:mb-3">
          Hi there,{' '}
          <span className="text-c-red">{location.state?.firstName}</span>👋.
        </h1>
        <p className="text-14 lg:text-16 font-medium">
          Thank you for signing up! We have sent you an email over at{' '}
          <span className="text-c-red underline">{location.state?.email}</span>.
          Enjoy your free trail. And happy coding.
        </p>
        <button
          type="button"
          className="text-14 font-semibold capitalize mt-4  text-c-red underline"
        >
          <Link to="/">back</Link>
        </button>
      </div>
    </motion.section>
  );
}
