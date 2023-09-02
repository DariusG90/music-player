import * as S from './MusicLibrary.styles'
import { LuLibrary } from 'react-icons/lu'
import { MdAdd } from 'react-icons/md'
import MusicLibraryItem from '../MusicLibraryItem/MusicLibraryItem'

const MusicLibrary = () => {
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

                <MusicLibraryItem
                    imgSrc='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg'
                    title='Liked Songs'
                    counter={5}
                />

            </S.LibraryList>
        </S.Container>
    )
}

export default MusicLibrary;