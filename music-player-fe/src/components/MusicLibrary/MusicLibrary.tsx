import * as S from './MusicLibrary.styles'
import { LuLibrary } from 'react-icons/lu'
import { MdAdd } from 'react-icons/md'
import MusicLibraryItem from '../MusicLibraryItem/MusicLibraryItem'
import useSessionStorage from '../../hooks/useSessionStorage'
import { useEffect, useState } from 'react'
import chillHop from '../../data'

const MusicLibrary = () => {
    const [libraries, setLibraries] = useState<any>([])
    const storage = useSessionStorage('library')
    useEffect(() => {
        // init music library from file. use only from session storage after this
        const initLibrary = chillHop().filter(library => library.init)
        if (!storage.value) {
            storage.setSessionValue(initLibrary)
            setLibraries(initLibrary)
        } else {
            setLibraries(storage.value)
        }

    }, [storage.value])

    return (
        <>
            <S.Header>
                <S.Title>
                    <LuLibrary /> Library
                </S.Title>
                <S.Actions>
                    {/* <MdAdd onClick={() => { console.log('addddd') }} /> */}
                </S.Actions>
            </S.Header>
            <S.LibraryList>
                {libraries && libraries.map((library: any) => (
                    library?.items.length > 0 && (
                        <MusicLibraryItem
                            id={library.id}
                            imgSrc={library.items[0].cover}
                            title={library.name}
                            counter={library.items.length}
                            key={library.id}
                        />
                    )
                ))}
            </S.LibraryList>
        </>
    )
}

export default MusicLibrary;