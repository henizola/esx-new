"use client";
// Import necessary modules and components
import React, { useEffect, useState } from "react";

// ComingSoon page component
const ComingSoon: React.FC = () => {
  const launchDate = new Date("2023-11-21T00:00:00Z"); // Set your launch date here

  // State to store the remaining time until launch
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Function to calculate the remaining time until launch
  function calculateTimeRemaining() {
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  // Effect to update the remaining time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className='bg-primary-blue'
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        // backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999999999999,
        overflow: "hidden",
      }}
    >
      <h1
        className='text-white'
        style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Coming Soon
      </h1>
      <p
        className='text-white'
        style={{ fontSize: "1.5rem", marginBottom: "2rem" }}
      >
        Our website is under construction. Stay tuned for the launch!
      </p>

      <div className='text-white' style={{ fontSize: "1.2rem" }}>
        <p className='text-white text-center w-full'>
          Launch Date: {launchDate.toDateString()}
        </p>
        <p className='text-white text-center w-full'>
          Time Remaining: {timeRemaining.days} days, {timeRemaining.hours}{" "}
          hours, {timeRemaining.minutes} minutes, {timeRemaining.seconds}{" "}
          seconds
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
