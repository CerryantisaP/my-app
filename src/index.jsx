import React from 'react';
import data from './data/dataAlbum';
import './index.jsx.css';

const Song =()=> {
    return (
        <div className = "song">
            <center>
            <img src={data.album.images[0].url} all={data.album.name} className="song_images"
            alt="gambar"/>

            <h3 className="song_album">{data.album.name}</h3>
            <p className="song_artist">{data.artists[0].name}</p>

            <div className="button_wrapper">
                <button className="song_button">Select</button>
            </div>
            </center>
        </div>
    );
}

export default Song;