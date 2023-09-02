// simple hook using Audio api

import { useEffect, useState } from "react";

const useAudio = (src: string) => {
    const [audio, setAudio] = useState(new Audio(src))
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [audioEnded, setAudioEnded] = useState(false)
    const [isSeeking, setIsSeeking] = useState(false)

    const play = () => {
        if (!isPlaying) {
            audio.play().then(() => {
                setIsPlaying(true)
                setAudioEnded(false)
            })
        }
    }

    const pause = () => {
        if (isPlaying) {
            audio.pause()
            setIsPlaying(false)
        }
    }

    const setAudioVolume = (newVolume: number) => {
        if (newVolume >= 0 && newVolume <= 1) {
            audio.volume = newVolume
            setVolume(newVolume)
        }
    }

    const seekTo = (time: number) => {
        if (time >= 0 && time <= duration) {
            setIsSeeking(true)
            audio.currentTime = time
            setCurrentTime(time)
        }
    }

    const handleAudioEnded = () => {
        setIsPlaying(false);
        setAudioEnded(true)
    }

    const handleTimeUpdate = () => {
        if (!isSeeking) {
            setCurrentTime(audio.currentTime);
        }
    }

    const handleMetadataLoaded = () => {
        setDuration(audio.duration);
    }

    useEffect(() => {
        audio.addEventListener('ended', handleAudioEnded);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleMetadataLoaded);

        return () => {
            audio.removeEventListener('ended', handleAudioEnded);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
        }
    }, [audio])

    return {
        play,
        pause,
        isPlaying,
        volume,
        setVolume: setAudioVolume,
        currentTime,
        duration,
        seekTo,
        audioEnded
    };
}

export default useAudio;