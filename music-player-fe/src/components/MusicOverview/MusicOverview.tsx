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
            <S.PlaylistOverview>
                <table>
                    <tr>
                        <th>#</th>
                        <th></th>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Date added</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='thumbnail'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                        </td>
                        <td>Beaver Creek</td>
                        <td>Aso, Middle School, Aviino</td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                </table>
            </S.PlaylistOverview>
        </S.Container>
    )
}

export default MusicOverview