import { Link } from "react-router-dom";
import { Album } from "../interfaces/spotifyDataInterfaces";
import ArtistProfile from "./ArtistProfile";


/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 * 
 * @param props 
 * @returns 
 * 
 */
const Card = (props: Album) => {
  const {images, name, artists, id, tracks} = props;

  return (
    <Link to={"albums/" + id} state={props} style={{ textDecoration: 'none' }}>
      <div style={{ height: "600px", width: "300px",display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "top", color: "#333", border: "solid 1px #333"}}>
        <div style={{width: "300px", height: "300px", backgroundImage: `url(${images[1].url})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <h1 style={{padding: "20px"}}>{name} ({tracks?.length} tracks)</h1>
        <ArtistProfile { ...artists }/>
      </div>
    </Link>
  )
}

export default Card;