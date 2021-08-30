import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
    }
    fetchData();
  }, []);

  return (
    <header>
      {/* Background Image */}
      {/* Title */}
      {/* div > two button(play & my list) */}
      {/* description */}
    </header>
  );
}

export default Banner;
