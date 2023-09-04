// simple hook using Audio api

import { useEffect, useState } from "react";

const useAudio = (src: string) => {
    const [audio, setAudio] = useState<HTMLMediaElement>()
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [audioEnded, setAudioEnded] = useState(false)
    const [isSeeking, setIsSeeking] = useState(false)
    const [isRepeat, setIsRepeat] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)

    useEffect(() => {
        if (src) {
            const audioObj = new Audio(src)
            setAudio(audioObj)
            setCurrentTime(0)
            audioObj.play()
            setIsPlaying(true)
        }
    }, [src])

    useEffect(() => {
        setIsRepeat(isRepeat)
    }, [isRepeat])

    useEffect(() => {
        setIsShuffle(isShuffle)
    }, [isShuffle])

    const play = () => {
        if (!isPlaying) {
            audio?.play().then(() => {
                setIsPlaying(true)
                setAudioEnded(false)
            })
        }
    }

    const pause = () => {
        if (isPlaying) {
            audio?.pause()
            setIsPlaying(false)
        }
    }

    const setAudioVolume = (newVolume: number) => {
        if (newVolume >= 0 && newVolume <= 1) {
            audio!.volume = newVolume
            setVolume(newVolume)
        }
    }

    const seekTo = (time: number) => {
        if (time >= 0 && time <= duration) {
            setIsSeeking(true)
            audio!.currentTime = time
            setCurrentTime(time)
            setIsSeeking(false)
        }
    }

    const updateRepeatState = (flag: boolean) => {
        setIsRepeat(flag)
    }

    const handleAudioEnded = () => {
        setIsPlaying(false);
        setAudioEnded(true)
    }

    const handleTimeUpdate = () => {
        if (!isSeeking && audio) {
            setCurrentTime(audio.currentTime);
        }
    }

    const handleMetadataLoaded = () => {
        // set to false when song load, otherwise, it won't trigger shuffle and repeap
        setAudioEnded(false)
        setDuration(audio!.duration);
    }

    useEffect(() => {
        if (audio) {
            audio.addEventListener('ended', handleAudioEnded, true);
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleMetadataLoaded);

            return () => {
                audio.removeEventListener('ended', handleAudioEnded, true);
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
            }
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
        audioEnded,
        audioObj: audio,
        setIsRepeat: updateRepeatState,
        isRepeat,
        isShuffle,
        setIsShuffle
    };
}

export default useAudio;