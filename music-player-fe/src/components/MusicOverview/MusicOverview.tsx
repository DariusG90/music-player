import PlaylistOverview from '../PlaylistOverview/PlaylistOverview'
import SongOverview from '../SongOverview/SongOverview'
import * as S from './MusicOverview.styles'

const MusicOverview = () => {
    return (
        <S.Container>
            <SongOverview
                imgSrc='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg'
                songTitle='Beaver Creek'
                artistName='Aso, Middle School, Aviino'
            />
            <PlaylistOverview />
        </S.Container>
    )
}

export default MusicOverview