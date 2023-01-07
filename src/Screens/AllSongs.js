// Import the useState hook and the AudioPlayer component from the react and react-h5-audio-player modules
import { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
// Import the default styles for the AudioPlayer component
import "react-h5-audio-player/lib/styles.css";

// Declare the AllSongs component function
export default function AllSongs() {
    // Define an array of music tracks, each with a name and source URL
    const musicTracks = [
        {
            name: "Memories",
            src: "https://www.bensound.com/bensound-music/bensound-memories.mp3"
        },
        {
            name: "Creative Minds",
            src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
        },
        {
            name: "Acoustic Breeze",
            src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
        },
        {
            name: "Sunny",
            src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
        },
        {
            name: "Tenderness",
            src: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
        },
        {
            name: "Once Again",
            src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
        },
        {
            name: "Sweet",
            src: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
        },
        {
            name: "Love",
            src: "https://www.bensound.com/bensound-music/bensound-love.mp3"
        },
        {
            name: "Piano Moment",
            src: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
        },
        {
            name: "E.R.F",
            src: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
        },
        {
            name: "Dreams",
            src: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
        },
        {
            name: "A Day To Remember",
            src:
                "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music"
        },
        {
            name: "Adventure",
            src: "https://www.bensound.com/bensound-music/bensound-adventure.mp3"
        },
        {
            name: "Photo Album",
            src: "https://www.bensound.com/bensound-music/bensound-photoalbum.mp3"
        },
        {
            name: "November",
            src: "https://www.bensound.com/bensound-music/bensound-november.mp3"
        }
    ];

    const [trackIndex, setTrackIndex] = useState(0);

    // Declare the handleClickPrevious function
    const handleClickPrevious = () => {
        // Set the track index to the previous track, or the last track if the current track is the first one
        setTrackIndex((currentTrack) =>
            currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
        );
    };

    // Declare the handleClickNext function
    const handleClickNext = () => {
        // Set the track index to the next track, or the first track if the current track is the last one
        setTrackIndex((currentTrack) =>
            currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
        );
    };
    return (
        <div className="artists-screen">
            <h1>Artists</h1>
            <span>
                <AudioPlayer
                    style={{ position: "absolute", bottom: 0, borderRadius: "1rem" }}
                    autoPlay
                    src={musicTracks[trackIndex].src}
                    onPlay={(e) => console.log("onPlay")}
                    showSkipControls={true}
                    showJumpControls={false}
                    header={`Now playing: ${musicTracks[trackIndex].name}`}
                    footer="All music from: www.bensound.com"
                    onClickPrevious={handleClickPrevious}
                    onClickNext={handleClickNext}
                    onEnded={handleClickNext}
                />
            </span>
        </div>
    );
}
