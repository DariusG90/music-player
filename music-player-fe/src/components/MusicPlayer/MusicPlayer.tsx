import * as S from './MusicPlayer.styles'
import MusicPlayerInfo from '../MusicPlayerInfo/MusicPlayerInfo'
import MusicPlayerControls from '../MusicPlayerControls/MusicPlayerControls'
import { useLibrary } from '../../contexts/LibraryContext'
import { useEffect, useState } from 'react'
import useAudio from '../../hooks/useAudio'
import useSessionStorage from '../../hooks/useSessionStorage'

const MusicPlayer = () => {
    const { state, dispatch } = useLibrary()
    const [library, setLibrary] = useState<any>()
    const song = state.song
    const storage = useSessionStorage('library').getSessionValue()
    const songsArray = library?.items
    const currentSongIndex = songsArray?.findIndex((el: any) => el?.id === song?.id)


    useEffect(() => {
        if (storage) {
            const lib = storage?.find((lib: any) => lib.id === state.playlistId)
            setLibrary(lib)
        }
    }, [state.playlistId])

    const {
        play,
        pause,
        isPlaying,
        setVolume,
        currentTime,
        duration,
        seekTo,
        audioEnded,
        audioObj,
        isRepeat,
        setIsRepeat,
        isShuffle,
        setIsShuffle
    } = useAudio(song?.audio)

    useEffect(() => {
        if (audioObj && !isRepeat) {
            audioObj.pause();
            audioObj.currentTime = 0;
        }
    }, [song?.id])

    useEffect(() => {
        if (audioEnded) {
            if (isRepeat) {
                play()
            }
            if (isShuffle) {
                randomSongFromPlaylist()
            }
        }
    }, [audioEnded])

    const handleNextSong = () => {
        const currentSongIndex = songsArray?.findIndex((el: any) => el.id === song.id)
        const nextSongIndex = currentSongIndex === songsArray?.length - 1 ? 0 : currentSongIndex + 1
        dispatch({
            type: 'play',
            song: songsArray[nextSongIndex],
            playlistId: library.id
        })
    }

    const handlePreviousSong = () => {
        const currentSongIndex = songsArray?.findIndex((el: any) => el.id === song.id)
        const previousSongIndex = currentSongIndex === 0 ? songsArray?.length - 1 : currentSongIndex - 1
        dispatch({
            type: 'play',
            song: songsArray[previousSongIndex],
            playlistId: library.id
        })
    }

    const randomSongFromPlaylist = () => {
        const randomIndex = Math.floor(Math.random() * songsArray.length - 1)
        if (randomIndex === currentSongIndex) {
            randomSongFromPlaylist()
            return;
        }
        dispatch({
            type: 'play',
            song: songsArray[randomIndex],
            playlistId: library.id
        })
    }

    return (
        <S.Container>
            <MusicPlayerInfo imgSrc={song?.cover} songTitle={song?.name} artistName={song?.artist} />
            <MusicPlayerControls
                songSrc={song?.audio}
                key={song?.id}
                playlistId={state.playlistId}
                play={play}
                currentTime={currentTime}
                duration={duration}
                seekTo={seekTo}
                setVolume={setVolume}
                pause={pause}
                isPlaying={isPlaying}
                isRepeat={isRepeat}
                setIsRepeat={setIsRepeat}
                handleNextSong={handleNextSong}
                handlePreviousSong={handlePreviousSong}
                setIsShuffle={setIsShuffle}
                isShuffle={isShuffle}
            />
        </S.Container>
    )
}

export default MusicPlayer