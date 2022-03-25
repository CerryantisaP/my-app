import React from 'react';
import data from '../data/dataAlbum';

const Song=({title,artist,img})=> {
    return (
       <div className="Song">
           <center>
           <div className="Song-wrap">
               <img src={img} alt={title} className="song_img" height="300px" width="300px"/>
               <h3 className="Song_album">Title : {title}</h3>
               <h3 className="Song_artist">Artist : {artist}</h3>
            <button>Select</button>
           </div>
           </center>
        </div>
    )
}

export default Song;