import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import calenderIcon from "../assets/calenderIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import { cities } from "../assets/assets";
const assets = { calenderIcon, searchIcon };
const Hero = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const today = new Date().toISOString().split("T")[0];

  return (
    <div
      className="
    flex flex-col items-start justify-center text-white 
    px-6 md:px-16 lg:px-24 xl:px-32
    bg-[url('/src/assets/heroImage.png')] bg-no-repeat bg-cover bg-center
    h-screen"
    >
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-18"
      >
        The Ultimate Hotel Experience
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4 max-sm:mt-2 max-sm:leading-[20px]"
      >
        Discover Your Perfect GateWay Destination
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-130 mt-2 text-sm md:text-base"
      >
        Unparalled luxury and comfort await at the world's most exclusive hotels
        and resorts. Start your journey today.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="bg-white text-gray-500  rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 mt-8 md:gap-2
        max-sm:mt-2 max-sm:py-2 max-sm:px-4 max-sm:gap-3"
      >
        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="Calender-icon"
              className="h-4"
            />
            <label htmlFor="destinationInput">Destination</label>
          </div>
          <input
            list="destinations"
            id="destinationInput"
            type="text"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            placeholder="Type here"
            required
          />
          <datalist id="destinations">
            {cities?.map((city, index) => (
              <option key={index} value={city} />
            ))}
          </datalist>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="Calender-icon"
              className="h-4"
            />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <input
            id="checkIn"
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (checkOut && new Date(e.target.value) > new Date(checkOut)) {
                setCheckOut("");
              }
            }}
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img
              src={assets.calenderIcon}
              alt="Calender-icon"
              className="h-4"
            />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <input
            id="checkOut"
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
          />
        </div>

        <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
          <label htmlFor="guests">Guests</label>
          <input
            min={1}
            max={4}
            id="guests"
            type="number"
            className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
            placeholder="0"
          />
        </div>

        <button
          disabled={
            !checkIn || !checkOut || new Date(checkOut) <= new Date(checkIn)
          }
          className="flex items-center justify-center gap-2 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
        >
          <img src={assets.searchIcon} alt="search-icon" className="h-4" />
          <span>Search</span>
        </button>
      </motion.form>
    </div>
  );
};

export default Hero;
