import { AiOutlineHeart } from 'react-icons/ai';
import * as S from './MusicPlayerInfo.styles'
import { SongOverviewProps } from '../../types/types';

const MusicPlayerInfo = ({ imgSrc, songTitle, artistName }: SongOverviewProps) => {
    return (
        <S.InfoContainer>
            <S.InfoThumbnail>
                <img src={imgSrc} />
            </S.InfoThumbnail>
            <S.InfoAttributes>
                <S.InfoSongName>
                    {songTitle}
                </S.InfoSongName>
                <S.InfoArtistName>
                    {artistName}
                </S.InfoArtistName>
            </S.InfoAttributes>
            <S.InfoAction>
                <AiOutlineHeart />
            </S.InfoAction>
        </S.InfoContainer>
    )
}

export default MusicPlayerInfo;