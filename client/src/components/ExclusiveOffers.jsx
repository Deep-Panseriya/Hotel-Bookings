/* eslint-disable no-unused-vars */
import { assets, exclusiveOffers } from '../assets/assets'
import Title from './Title'
import { motion } from 'framer-motion'
const ExclusiveOffers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.1 }}
      className='px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'
    >
      {/* Section Header */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <Title
          title='Featured Destinations'
          subtitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'
          font='font-playfair'
          align='left'
        />
        <button className='group flex items-center gap-2 text-sm font-semibold px-4 py-2 text-gray-700 rounded-md shadow border border-black hover:scale-[1.02] transition duration-300'>
          View All Offers
          <img
            src={assets.arrowIcon}
            alt='arrow-right'
            className='w-4 h-4 group-hover:translate-x-1 transition-all'
          />
        </button>
      </div>

      {/* Offers Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
        {exclusiveOffers?.map(item => (
          <div
            key={item._id}
            className='group relative flex flex-col justify-between p-6 w-full bg-center bg-cover bg-no-repeat rounded-2xl min-h-[320px] overflow-hidden'
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Dark overlay for text contrast */}
            <div className='absolute inset-0 bg-black/30 group-hover:bg-black/10 cursor-pointer transition duration-300 rounded-2xl'></div>

            {/* Top-left tag */}
            <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full z-10'>
              {item.title}
            </p>

            {/* Content */}
            <div className='relative z-10 mt-auto'>
              <p className='text-white/95 text-2xl font-semibold font-playfair'>
                {item.title}
              </p>
              <p className='text-white text-lg font-medium font-playfair'>
                {item.description}
              </p>
              <p className='text-white text-lg font-bold font-playfair'>
                Expires {item.expiryDate}
              </p>

              {/* CTA */}
              <button className='group flex items-center gap-2 mt-4 text-white font-medium cursor-pointer hover:scale-[1.02] transition duration-300'>
                View All Offers
                <img
                  src={assets.arrowIcon}
                  alt='arrow-right'
                  className='w-4 h-4 invert group-hover:translate-x-1 transition-all'
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default ExclusiveOffers
