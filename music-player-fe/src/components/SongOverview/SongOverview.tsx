import { SongOverviewProps } from '../../types/types';
import * as S from './SongOverview.styles'

const SongOverview = ({ imgSrc, songTitle, artistName }: SongOverviewProps) => {
    return (
        <S.SongOverview>
            <S.SongOverviewCover>
                <img src={imgSrc} />
            </S.SongOverviewCover>
            <S.SongOverviewAttributes>
                <S.SongTitle>
                    {songTitle}
                </S.SongTitle>
                <S.SongArtist>
                    {artistName}
                </S.SongArtist>
            </S.SongOverviewAttributes>
        </S.SongOverview>
    )
}

export default SongOverview;