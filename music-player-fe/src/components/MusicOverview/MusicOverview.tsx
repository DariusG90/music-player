import { useParams } from 'react-router-dom';
import PlaylistOverview from '../PlaylistOverview/PlaylistOverview'
import SongOverview from '../SongOverview/SongOverview'
import useSessionStorage from '../../hooks/useSessionStorage';
import { useEffect, useState } from 'react';
import { useLibrary } from '../../contexts/LibraryContext';

const MusicOverview = () => {
    const [library, setLibrary] = useState<any>([])
    const [firstSong, setFirstSong] = useState<any>()
    const { playlistId } = useParams()
    const storage = useSessionStorage('library')
    const { state, dispatch } = useLibrary()

    useEffect(() => {
        const lib = storage?.value?.find((lib: any) => lib.id === playlistId)
        setLibrary(lib)
        setFirstSong(lib?.items?.[0])
    }, [playlistId, storage])

    return (
        <>
            {/* show first song of the playlist */}
            <SongOverview
                imgSrc={state?.song?.cover || firstSong?.cover}
                songTitle={state?.song?.name || firstSong?.name}
                artistName={state?.song?.artist || firstSong?.artist}
            />

            {/* display all songs from the given playlist */}
            <PlaylistOverview items={library?.items} playlistId={library?.id} />
        </>
    )
}

export default MusicOverview