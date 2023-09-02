import * as S from './PlaylistOverview.styles'

const PlaylistOverview = () => {
    return (
        <S.PlaylistOverview>
            <S.PlaylistTable>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Date added</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td className='title'>
                            <img src='https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg' />
                            <S.PlaylistItemAttributes>
                                <S.PlaylistItemTitle>Beaver Creek</S.PlaylistItemTitle>
                                <S.PlaylistItemArtist>Aso, Middle School, Aviino</S.PlaylistItemArtist>
                            </S.PlaylistItemAttributes>
                        </td>
                        <td>{new Date().getTime()}</td>
                    </tr>
                </table>
            </S.PlaylistTable>
        </S.PlaylistOverview>
    )
}


export default PlaylistOverview