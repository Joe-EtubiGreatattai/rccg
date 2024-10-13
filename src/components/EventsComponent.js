import React, { useState, useEffect } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion"; // Import framer-motion
import "../App.css"; // Import CSS for additional styling

const EventsComponent = () => {
  const events = [
    {
      title: "God Of Mercy",
      date: "23rd June 2024",
      image: require("../image/card2.png"),
    },
    {
      title: "The Mandate",
      date: "30th June 2024",
      image: require("../image/card1.png"),
    },
    {
      title: "Pursue Overtake & Recover...",
      date: "19th May 2024",
      image: require("../image/card2.png"),
    },
    {
      title: "Pursue Overtake & Recover...",
      date: "19th May 2024",
      image: require("../image/card3.png"),
    },
    {
      title: "Pursue Overtake & Recover...",
      date: "19th May 2024",
      image: require("../image/card1.png"),
    },
  ];

  const getItemsPerPage = () => {
    return window.innerWidth < 640 ? 1 : 4; // Show 1 item on mobile, 3 on larger screens
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleResize = () => {
    setItemsPerPage(getItemsPerPage());
  };

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds
    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex, itemsPerPage]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - itemsPerPage + events.length) % events.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % events.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getDisplayedEvents = () => {
    const result = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % events.length;
      result.push(events[index]);
    }
    return result;
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h2
        className="text-2xl md:text-3xl font-bold md:text-center mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        UPCOMING EVENTS & ANNOUNCEMENTS
      </motion.h2>
      <motion.p
        className="text-sm md:text-base md:text-center text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Be In The Know About Our Current Programs And Events.
      </motion.p>

      <div className="relative">
        <div className="flex items-center justify-center">
          <button
            className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md"
            onClick={handlePrev}
          >
            <IoChevronBackOutline className="text-2xl text-gray-600" />
          </button>

          <div
            className={`flex overflow-hidden transition-transform duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            <div
              className={`flex space-x-4 ${
                itemsPerPage === 1 ? "flex-col" : ""
              }`}
            >
              {getDisplayedEvents().map((event, index) => (
                <motion.div
                  key={index}
                  className={`flex-none ${
                    itemsPerPage === 1 ? "w-full" : "w-64"
                  } ${itemsPerPage === 1 ? "mb-4" : ""}`}
                  initial={{ opacity: 0, y: 50 }} // Start from below
                  animate={{ opacity: 1, y: 0 }} // Fade in and move up
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-semibold text-sm md:text-base">
                    {event.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    {event.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md"
            onClick={handleNext}
          >
            <IoChevronForwardOutline className="text-2xl text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(events.length / itemsPerPage) }).map(
          (_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === Math.floor(currentIndex / itemsPerPage)
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default EventsComponent;
