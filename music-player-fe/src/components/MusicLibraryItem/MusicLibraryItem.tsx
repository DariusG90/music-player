import * as S from './MusicLibraryItem.styles'
import { MusicLibraryItemProps } from '../../types/types'
import { useNavigate } from 'react-router-dom'

const MusicLibraryItem = ({ id, imgSrc, title, type = 'Playlist', counter }: MusicLibraryItemProps) => {
    const navigate = useNavigate();

    const handleItemClick = () => {
        navigate(`/playlist/${id}`)
    }
    return (
        <S.LibraryItem onClick={handleItemClick}>
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