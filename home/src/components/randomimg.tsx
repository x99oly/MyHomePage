import { useState, useEffect } from "react";
import Image from "next/image";

export default function RandomImg() {
  const gifs = [
    "/images/matrix.gif",
    "/images/ilikepressbuttons.gif",
    "/images/chicoprog.gif"
  ];

  const [randomGif, setRandomGif] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    setRandomGif(gifs[randomIndex]);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: "100%", minHeight: "500px", height: "100%" }}>
      {randomGif && (
        <Image 
          src={randomGif} 
          alt="Random Matrix GIF" 
          width={400} 
          height={400} 
          priority={false} 
        />
      )}
    </div>
  );
}
