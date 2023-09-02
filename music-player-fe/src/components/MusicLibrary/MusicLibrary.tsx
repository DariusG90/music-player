import * as S from './MusicLibrary.styles'
import { LuLibrary } from 'react-icons/lu'
import { MdAdd } from 'react-icons/md'
import MusicLibraryItem from '../MusicLibraryItem/MusicLibraryItem'
import useSessionStorage from '../../hooks/useSessionStorage'

const MusicLibrary = () => {
    const storage = useSessionStorage('library')
    const libraries = storage.value
    return (
        <S.Container>
            <S.Header>
                <S.Title>
                    <LuLibrary /> Library
                </S.Title>
                <S.Actions>
                    <MdAdd onClick={() => { console.log('addddd') }} />
                </S.Actions>
            </S.Header>
            <S.LibraryList>
                {libraries && libraries.map((library: any) => (
                    library?.items.length > 0 && (
                        <MusicLibraryItem
                            imgSrc={library.items[0].cover}
                            title={library.name}
                            counter={library.items.length}
                            key={library.id}
                        />
                    )
                ))}
            </S.LibraryList>
        </S.Container>
    )
}

export default MusicLibrary;