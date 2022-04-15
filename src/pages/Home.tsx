import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Album } from '../interfaces/spotifyDataInterfaces';
import { getSpotifyToken } from '../logic/getSpotifyData'; // To be replaced with your api response data



export const Home = () => {

  const [albums, setAlbums] = useState<Album[]>([]);

  const getTopAlbums = async (token: string) => {
    let receivedAlbums: Album[] = [];

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };

    const response = await fetch("https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi/albums?limit=50", { headers: headers });
    
    const itemsFromSpotify = await response.json().then((data) => {
      return data.items;
    });
    
    for(let item of itemsFromSpotify) {
      if(item.type === "album" && item.album_group === "album" && item.available_markets.length > 100) {
        receivedAlbums.push(item);
      };
    };

    console.log(receivedAlbums);

    setAlbums(receivedAlbums);
  }
useEffect(() => {
  getSpotifyToken().then((token) => {
    getTopAlbums(token);
  });
}, []);
  return (
    <>
      <h1>Daft Punk Albums ({albums.length})</h1>
      
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        {albums.map((album) => (
          <Card images={album.images} name={album.name} artists={album.artists} id={album.id} key={album.id}/>
        ))}
        

      </div>
    </>
  );
};

export default Home;