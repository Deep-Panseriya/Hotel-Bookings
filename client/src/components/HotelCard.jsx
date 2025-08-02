import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faBed, faFan } from '@fortawesome/free-solid-svg-icons'

const HotelCard = ({ room, index }) => {
  if (!room || !room._id) return null

  const { hotel, roomType, pricePerNight, images } = room
  const isBestseller = index % 2 === 0

  return (
    <Link to={`/hotel/${room._id}`} className='block h-full'>
      <div className='group bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden transform hover:scale-[1.02] h-full flex flex-col'>
        <div className='relative overflow-hidden'>
          {isBestseller && (
            <div className='absolute top-2 right-2 bg-blue-600/90 text-white text-[11px] font-medium px-2 py-0.5 rounded-full shadow z-10'>
              Bestseller
            </div>
          )}

          <img
            src={images?.[0] || assets.placeholderImage}
            loading='lazy'
            onError={e => (e.currentTarget.src = assets.placeholderImage)}
            alt={`${hotel.name} - ${roomType}`}
            className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>

        <div className='p-4 space-y-2 flex-grow flex flex-col justify-between'>
          <div>
            <div className='flex justify-between items-start'>
              <h3 className='text-lg font-semibold text-gray-800'>
                {hotel.name}
              </h3>
              <div className='flex items-center text-sm text-yellow-500 gap-1'>
                <img
                  src={assets.starIconFilled}
                  alt='Rating'
                  className='w-4 h-4'
                />
                <span>4.5</span>
              </div>
            </div>

            <div className='flex items-center text-sm text-gray-600 gap-2 mt-1'>
              <img
                src={assets.locationFilledIcon}
                alt='Location'
                className='w-4 h-4'
              />
              <span className='truncate max-w-[200px]' title={hotel.address}>
                {hotel.address}
              </span>
            </div>

            {/* Amenities Icons */}
            <div className='flex gap-4 mt-3 text-gray-600 text-sm'>
              <div className='flex items-center gap-1'>
                <FontAwesomeIcon icon={faWifi} className='w-4 h-4' />
                Wi-Fi
              </div>
              <div className='flex items-center gap-1'>
                <FontAwesomeIcon icon={faBed} className='w-4 h-4' />
                Bed
              </div>
              <div className='flex items-center gap-1'>
                <FontAwesomeIcon icon={faFan} className='w-4 h-4' />
                A/C
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center mt-3'>
            <p className='text-gray-900 text-base font-bold'>
              ${pricePerNight}{' '}
              <span className='text-sm font-medium text-gray-500'>/ night</span>
            </p>
            <button
              onClick={e => e.preventDefault()}
              className='text-xs font-semibold px-4 py-2 text-gray-700 rounded-md shadow border border-black cursor-pointer '
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
