import { useLocation } from "react-router-dom"
import { Album } from "../interfaces/spotifyDataInterfaces"

export const AlbumInfo = () => {

    let location: any = useLocation();
    const album: Album = location.state;


    return (
        <>
            <h1>{album.name}</h1>
            <div>
                {album.tracks?.map((track, index) => (
                    <h3 key={track.id}>{(index + 1) + ". " + track.name}</h3>
                ))}
            </div>
        </>
        
    )

}


export default AlbumInfo