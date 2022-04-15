import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { Album } from '../interfaces/spotifyDataInterfaces';
import { getSpotifyToken } from '../logic/getSpotifyData'; // To be replaced with your api response data



export const Home = () => {

  const [albums, setAlbums] = useState<Album[]>([]);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>([]);

  function updateSearch(value: string) {
    if(value === "") {
      setFilteredAlbums(albums)
    }
    setFilteredAlbums(Object.values(albums).filter(album => album.name.toLowerCase().includes(value.toLowerCase())))
  }

  const getTopAlbums = async (token: string) => {
    let receivedAlbums: Album[] = [];

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };

    const response = await fetch("https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi/albums?limit=50", { headers: headers });
    
    // daft punk: 4tZwfgrHOc3mvqYlEYSvVi FG: 0Y4inQK6OespitzD6ijMwb

    const itemsFromSpotify = await response.json().then((data) => {
      return data.items;
    });
    
    for(let item of itemsFromSpotify) {
      if(item.type === "album" && item.album_group === "album" && item.available_markets.length > 100) {
        let tracks = [];
        const trackResponse = await fetch("https://api.spotify.com/v1/albums/" + item.id + "/tracks?limit=50", { headers: headers });
        tracks = await trackResponse.json().then((data) => {
          return data.items
        })
        item.tracks = tracks;
        receivedAlbums.push(item);
      };
    };


    setAlbums(receivedAlbums);
    setFilteredAlbums(receivedAlbums);

  }
useEffect(() => {
  getSpotifyToken().then((token) => {
    getTopAlbums(token);
  });
  
}, []);
  return (
    <>
      <h1>Daft Punk Albums ({filteredAlbums.length})<input style={{display: 'flex'}} placeholder="Enter Album Name" onChange={event => updateSearch(event.target.value)}/></h1>
      
      <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
        {filteredAlbums.map((album) => (
          <Card images={album.images} name={album.name} artists={album.artists} id={album.id} tracks={album.tracks} key={album.id}/>
        ))}
        

      </div>
    </>
  );
};

export default Home;