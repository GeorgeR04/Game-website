import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Mapsitems } from './Compo/Maps items';

function Mapsid() {

    const { id } = useParams();
    const selectedBackground = Mapsitems.find((bg) => bg.id === id);
    const { imageUrl, musicUrl, text } = selectedBackground || {};
    const [audio] = useState(new Audio(musicUrl));



    useEffect(() => {
        // Play the music when the component is mounted
        audio.play();

        // Stop the music when the component is unmounted
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio]);

    return (
        <div className=" -z-10 relative h-Mapsitem">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-50"></div>
            <img className="w-full h-full object-cover" src={imageUrl} alt="Map" />
            <div className="absolute inset-0 flex w-1/2">
                <article className="bg-gradient-to-r from-transparent via-Secondarycolor to-transparent p-8">
                    <p className="font-body text-xl text-white">{text}</p>
                </article>
            </div>
        </div>
    );
}

export default Mapsid;