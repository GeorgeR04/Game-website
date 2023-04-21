import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import Earth from "../component/3D Components/Earth";
import audioFile from './test2.mp3';




function home() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const audio = new Audio(audioFile);
        audio.play();

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div className='text-xl text-white h-home bg-cover font-body bg-center bg-no-repeat bg-cover bg-gradient-to-r from-mainColorLight to-mainColorLight2 '>
            <Earth/>

        </div>
    )
}

export default home;