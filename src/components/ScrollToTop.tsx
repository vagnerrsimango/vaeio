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
    <div
      className={`fixed  bottom-16 right-0 ${isVisible ? "block" : "hidden"}`}
    >
      <button
        className="bg-green-400 text-white px-4 py-2 rounded-full focus:outline-none mr-8 mb-16"
        onClick={scrollToTop}
      >
        <FontAwesomeIcon color="white" icon={faArrowUp} height={80} />
      </button>
    </div>
  );
}
