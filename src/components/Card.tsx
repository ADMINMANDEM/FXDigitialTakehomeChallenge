import React from "react";
import { Artist, Image } from "../interfaces/spotifyDataInterfaces";

interface CardProps {
  images: Image[]; 
  name: string;
  artists: Artist[];
  id: string;
}

/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 * 
 * @param props 
 * @returns 
 * 
 */
const Card = (props: CardProps) => {
  const {images, name, artists, id} = props;
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "15px", color: "#333", border: "solid 1px #333", borderRadius: "5px"}}>
      <div style={{width: "300px", height: "300px", backgroundImage: `url(${images[1].url})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
      <h1>{name}</h1>
      <h2>{artists[0].name}</h2>
      {/* <ul>
        {artists.map((id: any) => <li key={id}>{id}</li>)}
      </ul> */}
    </div>
  )
}

export default Card;