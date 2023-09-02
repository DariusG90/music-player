import * as S from './MusicLibraryItem.styles'
import { MusicLibraryItemProps } from '../../types/types'

const MusicLibraryItem = ({ imgSrc, title, type = 'Playlist', counter }: MusicLibraryItemProps) => {
    return (
        <S.LibraryItem>
            <S.LibraryItemThumbnail>
                <img src={imgSrc} />
            </S.LibraryItemThumbnail>
            <S.LibraryItemAttributesContainer>
                <S.LibraryItemTitle>{title}</S.LibraryItemTitle>
                <S.LibraryItemAttributes>
                    {type} - {counter}
                </S.LibraryItemAttributes>
            </S.LibraryItemAttributesContainer>
        </S.LibraryItem>
    )
}

export default MusicLibraryItem