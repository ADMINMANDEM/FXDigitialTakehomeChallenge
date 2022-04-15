import { Album, Artist } from "../interfaces/spotifyDataInterfaces"

export const ArtistProfile = (artists: Artist[]) => {


    return (
        <>
            <h1>{artists[2] ? "Various Artists": artists[1] ? artists[0].name + ", " + artists[1].name : artists[0].name}</h1>
        </>
        
    )

}


export default ArtistProfile;