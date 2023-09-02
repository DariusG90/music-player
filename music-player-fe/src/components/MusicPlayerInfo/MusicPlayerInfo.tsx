import { AiOutlineHeart } from 'react-icons/ai';
import * as S from './MusicPlayerInfo.styles'

const MusicPlayerInfo = () => {
    return (
        <S.InfoContainer>
            <S.InfoThumbnail>
                <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
            </S.InfoThumbnail>
            <S.InfoAttributes>
                <S.InfoSongName>
                    Beaver Creek
                </S.InfoSongName>
                <S.InfoArtistName>
                    Aso, Middle School, Aviino
                </S.InfoArtistName>
            </S.InfoAttributes>
            <S.InfoAction>
                <AiOutlineHeart />
            </S.InfoAction>
        </S.InfoContainer>
    )
}

export default MusicPlayerInfo;