/* eslint-disable no-unused-vars */
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import { motion } from 'framer-motion'

import Title from './Title'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const FeaturedDestination = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
      className='bg-gray-100 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-12 pt-20 pb-30'
    >
      <Title
        title='Featured Destinations'
        subtitle='Discover traveler favorites and top-rated stays across the globe.'
        font='font-playfair'
      />

      <div
        className='grid gap-8
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        items-stretch justify-center mt-6'
      >
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <div key={room._id || index} className='mt-3'>
            <HotelCard room={room} index={index} />
          </div>
        ))}
      </div>

      {/* View Offers Button */}
      <div className='flex justify-center mt-10'>
        <Link
          to={'/rooms'}
          className='inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#2f5cff] rounded-md shadow hover:scale-[1.02] transition duration-300'
        >
          View Offers
          <FontAwesomeIcon icon={faArrowRight} className='w-4 h-4' />
        </Link>
      </div>
    </motion.div>
  )
}

export default FeaturedDestination
