import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
function Lyrics(props) {
    
    const [track, setTrack] = useState({});
    const [lyrics, setLyrics] = useState({});
    const id = useParams()   

    useEffect(() => {
    
    // console.log(id)
    axios
    .get(
    `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id.id}&apikey=${process.env.REACT_APP_MM_KEY}
    `)
    .then((res) => {
        setLyrics(res.data.message.body.lyrics);

        return axios
        .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id.id}&apikey=${process.env.REACT_APP_MM_KEY}
        `)

    })
    .then(res =>{
        // console.log(res.data.message.body.track)
        setTrack(res.data.message.body.track);
    })
    .catch((err) => console.log(err));
    },[id]);
    
    if(track===undefined || lyrics===undefined || Object.keys(track).length===0 ||Object.keys(lyrics).length===0){
        return <Spinner/>
    }
    else{
        return(
            <React.Fragment>
                <Link to="/" className="btn btn-sm btn-dark mb-4">Go Back</Link>
                <div className='card'>
                    <h5 className='card-header'>
                        {track.track_name} by <span className='text-secondary'>{track.artist_name}</span>
                    </h5>
                    <div className='card-body'>
                        <p className='card-text'>{lyrics.lyrics_body}</p>
                    </div>

                </div>

                <ul className='list-group mt-3'>
                    <li className='list-group-item'>
                        <strong>Album ID</strong>: {track.album_id}
                    </li>
                    <li className='list-group-item'>
                        <strong>Music Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li>
                    <li className='list-group-item'>
                        <strong>Explicit words</strong>: {track.explicit===0?"No":"Yes"}
                    </li>
                    <li className='list-group-item'>
                        <strong>Release date</strong>: <Moment format='DD/MM/YYYY'>{track.first_release_date}</Moment>
                    </li>
                </ul>
            </React.Fragment>
        ) 
        
    }
}

export default Lyrics