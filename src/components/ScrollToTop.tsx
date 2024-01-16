import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300); // Adjust the scroll threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 ${isVisible ? "block" : "hidden"}`}>
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded-full focus:outline-none mr-8 mb-8 bg-opacity-75"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon color="white" icon={faArrowUp} />
      </button>
    </div>
  );
}
