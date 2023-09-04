
import { BsFillVolumeMuteFill, BsFillVolumeUpFill, BsRepeat, BsRepeat1, BsShuffle, BsSkipEndFill, BsVolumeDownFill } from 'react-icons/bs';
import * as S from './MusicPlayerControls.styles'
import { AiFillStepBackward, AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import useSessionStorage from '../../hooks/useSessionStorage';

const MusicPlayerControls = ({
    songSrc,
    playlistId,
    play,
    currentTime,
    seekTo,
    duration,
    setVolume,
    pause,
    isPlaying,
    isRepeat,
    setIsRepeat,
    handleNextSong,
    handlePreviousSong,
    setIsShuffle,
    isShuffle
}: Props) => {

    const [currTime, setCurrTime] = useState(0)
    const [localVolume, setLocalVolume] = useState(1)

    useEffect(() => {
        setCurrTime(currentTime)
    }, [currentTime])

    const handleSeek = (e: any) => {
        const newTime = parseFloat(e.target.value);
        seekTo(newTime);
    };

    const handleMuteVolume = () => {
        if(localVolume > 0){
            setVolume(0)
            setLocalVolume(0)
        } else {
            setVolume(1)
            setLocalVolume(1)
        }
    }

    const handleVolumeIcon = () => {
        if (localVolume <= 0.5 && localVolume > 0) {
            return <BsVolumeDownFill onClick={handleMuteVolume} />
        }
        if (localVolume == 0) {
            return <BsFillVolumeMuteFill onClick={handleMuteVolume} />
        }

        return <BsFillVolumeUpFill onClick={handleMuteVolume} />
    }

    const handleVolumeChange = (e: any) => {
        setVolume(parseFloat(e.target.value))
        setLocalVolume(e.target.value)
    }

    const handleRepeat = () => {
        if (isRepeat) {
            return <BsRepeat1 onClick={() => setIsRepeat(false)} />
        }
        return <BsRepeat onClick={() => setIsRepeat(true)} />
    }


    return (
        <>
            <S.PlayerContainer>
                <S.PlayerControls>
                    <BsShuffle className={isShuffle ? 'activeShuffle' : undefined} onClick={() => setIsShuffle(!isShuffle)} />
                    <AiFillStepBackward onClick={handlePreviousSong} />
                    {isPlaying ?
                        <AiOutlinePauseCircle className='bigSVG' onClick={pause} /> :
                        <AiOutlinePlayCircle className='bigSVG' onClick={play} />
                    }
                    <BsSkipEndFill onClick={handleNextSong} />
                    {handleRepeat()}

                </S.PlayerControls>
                <S.AudioTimeline type='range' min={0} step={0.1} max={duration} onChange={handleSeek} value={currTime} />
            </S.PlayerContainer>
            <S.VolumeContainer>
                {handleVolumeIcon()}
                <S.VolumeLine type='range' min={0} max={1} step={0.01} onChange={handleVolumeChange} value={localVolume} />
            </S.VolumeContainer>
        </>
    )
}

type Props = {
    songSrc: string;
    playlistId: string;
    play: () => void;
    currentTime: number;
    seekTo: (time: number) => void;
    duration: number;
    setVolume: (data: number) => void;
    pause: () => void;
    isPlaying: boolean;
    isRepeat: boolean;
    setIsRepeat: (flag: boolean) => void;
    handleNextSong: () => void;
    handlePreviousSong: () => void;
    setIsShuffle: (flag: boolean) => void;
    isShuffle: boolean;
}

export default MusicPlayerControls;